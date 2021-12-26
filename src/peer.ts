import { hostname } from 'os'
import { logger } from './logger'
import { prb } from './proto.generated'
import PQueue from 'p-queue'
import type { Connection } from 'libp2p'
import type { Multiaddr } from 'multiaddr'
import type { WalkiePtpNode } from './ptp'
import type PeerId from 'peer-id'
import type PeerStore from 'libp2p/dist/src/peer-store'
import type libp2p from 'libp2p'
import WalkieRoles = prb.WalkieRoles
import WalkieSystemInfo = prb.WalkieSystemInfo

export type WalkiePeer = {
  peer: ReturnType<PeerStore['get']>
  peerId: PeerId
  connection: Connection
  multiaddr: Multiaddr
  hostname: string
  role: WalkieRoles
  chainIdentity?: string
  bridgeIdentity?: string
  get isConnOpen(): boolean
}

export type WalkiePeerStore = {
  [key: string]: WalkiePeer
}

export type WalkiePeerManager = {
  node: libp2p
  peers: WalkiePeerStore
  get internalDataProviders(): WalkiePeerStore
  get externalDataProviders(): WalkiePeerStore
  get lifecycleManagers(): WalkiePeerStore
  get traders(): WalkiePeerStore
}

export const createPeerManager = (
  prbNode: WalkiePtpNode<prb.WalkieRoles>
): void => {
  const peers: WalkiePeerStore = {}
  const { node, request, on } = prbNode
  const handshakeQueue = new PQueue({
    concurrency: 10,
  })

  const getSystemInfo = () =>
    WalkieSystemInfo.create({
      hostname: hostname(),
      peerId: prbNode.peerId.toB58String(),
      role: prbNode.role,
      chainIdentity: prbNode.chainIdentity,
      bridgeIdentity: prbNode.bridgeIdentity,
    })

  on('Hello', async () => getSystemInfo())

  node.connectionManager.on('peer:connect', (connection: Connection) => {
    const peerId = connection.remotePeer
    const multiaddr = connection.remoteAddr
    const readablePeerId = peerId.toB58String()
    handshakeQueue
      .add(async () => {
        logger.debug(`Peer connected: ${readablePeerId}`)
        const peer = node.peerStore.get(peerId)
        const peerSystemInfo = await request(peerId, 'Hello', getSystemInfo())
        if (peerSystemInfo.hasError) {
          throw peerSystemInfo.error
        }
        const data = peerSystemInfo.data as prb.WalkieSystemInfo

        peers[readablePeerId] = {
          peer,
          peerId,
          multiaddr,
          connection,
          hostname: data.hostname,
          role: data.role,
          chainIdentity: data.chainIdentity,
          bridgeIdentity: data.bridgeIdentity,
          get isConnOpen() {
            return (connection.stat.status as unknown) === 'OPEN'
          },
        }
        logger.info(`Peer updated: ${readablePeerId}`)
      })
      .catch((e) => {
        logger.debug(`Failed to save peer ${readablePeerId}`, e)
      })
  })

  const filterPeers = (role: WalkieRoles) => {
    const ret: WalkiePeerStore = {}
    const result = Object.values(peers).filter((p) => p.role === role)
    for (const p of result) {
      ret[p.peerId.toB58String()] = p
    }
    return ret
  }

  prbNode.peerManager = {
    node,
    peers,
    get internalDataProviders() {
      return filterPeers(WalkieRoles.WR_DATA_PROVIDER_INT)
    },
    get externalDataProviders() {
      return filterPeers(WalkieRoles.WR_DATA_PROVIDER_EXT)
    },
    get lifecycleManagers() {
      return filterPeers(WalkieRoles.WR_LIFECYCLE_MANAGER)
    },
    get traders() {
      return filterPeers(WalkieRoles.WR_TRADER)
    },
  }
}
