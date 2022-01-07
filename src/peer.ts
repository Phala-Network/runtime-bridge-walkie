import { hostname } from 'os'
import { logger } from './logger'
import { prb } from './proto.generated'
import PQueue from 'p-queue'
import type { Connection } from 'libp2p'
import type { Multiaddr } from 'multiaddr'
import type { RpcMethodName } from './rpc-types'
import type { RpcMethodRequest } from './rpc-types'
import type { RpcResponse } from './rpc'
import type { WalkiePtpNode } from './ptp'
import type PeerId from 'peer-id'
import type PeerStore from 'libp2p/dist/src/peer-store'
import type libp2p from 'libp2p'
import WalkieRoles = prb.WalkieRoles
import WalkieSystemInfo = prb.WalkieSystemInfo

// TODO: Authentication

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
  dial: WalkiePeerRequester
}

export type WalkiePeerRequester = <T extends RpcMethodName>(
  method: T,
  request: RpcMethodRequest<T>
) => Promise<RpcResponse<T>>

export type WalkiePeerStore = {
  [key: string]: WalkiePeer
}

export type WalkiePeerPendingStore = {
  [key: string]: boolean | null
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
  const peerPendingList: WalkiePeerPendingStore = {}
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
    const readablePeerId = peerId.toB58String()
    if (peers[readablePeerId]?.isConnOpen || peerPendingList[readablePeerId]) {
      return
    }
    if (connection.stat.direction === 'inbound') {
      return
    }
    peerPendingList[readablePeerId] = true
    logger.debug(
      `Established ${connection.stat.direction} connection to ${readablePeerId}, trying handshake...`,
      {
        remoteAddr: connection.remoteAddr.toString(),
      }
    )
    handshakeQueue
      .add(async () => {
        const isConnOpen = () => (connection.stat.status as unknown) === 'OPEN'
        const dial: WalkiePeerRequester = async (method, _request) => {
          const currConn = await node.dialer.connectToPeer(peerId)
          return request(currConn, method, _request)
        }

        const peer = node.peerStore.get(peerId)
        const multiaddr = connection.remoteAddr
        const peerSystemInfo = await dial('Hello', getSystemInfo())
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
            return isConnOpen()
          },
          dial,
        }
        logger.info(`Peer saved: ${readablePeerId}`)
      })
      .catch((e) => {
        logger.debug(`Failed to handshake with peer ${readablePeerId}`, e)
      })
      .finally(() => {
        delete peerPendingList[readablePeerId]
      })
  })

  node.on('peer:discovery', (peerId: PeerId) => {
    const readablePeerId = peerId.toB58String()

    if (peers[readablePeerId]?.isConnOpen || peerPendingList[readablePeerId]) {
      return
    }

    logger.debug(`Discovered peer ${readablePeerId}, trying to connect...`)
    node.dialer.connectToPeer(peerId).catch((e) => {
      logger.debug(`Failed to connect to ${readablePeerId}`, e)
    })

    // todo: check state at interval
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
