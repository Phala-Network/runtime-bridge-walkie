import {
  HandlerRemover,
  HandlerUpdater,
  WalkieRpcHandler,
  WalkieRpcHandlerStore,
  handleInitPeer,
  handleRpc,
  warpRpcRequester,
} from './rpc'
import { NOISE as libp2p__noise } from '@chainsafe/libp2p-noise'
import libp2p, { Libp2pConfig } from 'libp2p'
import libp2p__bootstrap from 'libp2p-bootstrap'
import libp2p__dht from 'libp2p-kad-dht'
import libp2p__mdns from 'libp2p-mdns'
import libp2p__mplex from 'libp2p-mplex'
import libp2p__tcp from 'libp2p-tcp'
import type { RpcMethodName } from './rpc-types'
import type { RpcRequester } from './rpc'
import type { prb } from './proto.generated'
import type PeerId from 'peer-id'

export type PtpChainIdentity<R extends prb.WalkieRoles> =
  | (R extends prb.WalkieRoles.WR_CLIENT ? null : string)
  | string

export type PtpBridgeIdentity<R extends prb.WalkieRoles> =
  | (R extends prb.WalkieRoles.WR_CLIENT ? string : null)
  | string

export type CreatePtpNodeProps<R extends prb.WalkieRoles> = {
  peerId: PeerId
  role: R
  chainIdentity: PtpChainIdentity<R>
  bridgeIdentity: PtpBridgeIdentity<R>
  listenAddresses: string[]
  bootstrapAddresses: string[]
  overrides?: Partial<libp2p.Libp2pOptions & libp2p.CreateOptions> | null
}

export type WalkieHandleOptions<R extends prb.WalkieRoles> = {
  peerId: PeerId
  role: R
  chainIdentity: PtpChainIdentity<R>
  bridgeIdentity: PtpBridgeIdentity<R>
  node: libp2p
}

export type WalkiePtpNode<R extends prb.WalkieRoles> =
  WalkieHandleOptions<R> & {
    start: libp2p['start']
    on: HandlerUpdater<RpcMethodName>
    off: HandlerRemover<RpcMethodName>
    request: RpcRequester<RpcMethodName>
    // broadcast: RpcBroadcaster<never> : don't implement for now
  }

export const createPtpNode = async <R extends prb.WalkieRoles>(
  props: CreatePtpNodeProps<R>
): Promise<WalkiePtpNode<R>> => {
  const { peerId, role, chainIdentity, bridgeIdentity } = props

  const node = await libp2p.create({
    addresses: {
      listen: props.listenAddresses,
    },
    peerId,
    modules: {
      transport: [libp2p__tcp],
      streamMuxer: [libp2p__mplex],
      connEncryption: [libp2p__noise],
      peerDiscovery: [libp2p__bootstrap, libp2p__mdns],
      dht: libp2p__dht,
    },
    config: {
      dht: {
        enabled: true,
      },
      peerDiscovery: {
        autoDial: true,
        bootstrap: {
          interval: 60e3,
          enabled: true,
          list: props.bootstrapAddresses,
        },
        mdns: {
          interval: 20e3,
          enabled: true,
        },
        dht: {
          enabled: true,
        },
      },
    } as Libp2pConfig,
    ...(props.overrides || {}),
  })

  const rpcHandlers: WalkieRpcHandlerStore = {}

  const on = warpHandlerUpdater(rpcHandlers)
  const off = warpHandlerRemover(rpcHandlers)

  const handleOptions = {
    peerId,
    role,
    chainIdentity,
    bridgeIdentity,
    node,
  }

  const request = warpRpcRequester(handleOptions)
  handleRpc(handleOptions)
  handleInitPeer(handleOptions)

  return {
    peerId,
    role,
    chainIdentity,
    bridgeIdentity,
    node,
    start: () => node.start(),
    on,
    off,
    request,
  }
}

const warpHandlerUpdater =
  (handlers: WalkieRpcHandlerStore) =>
  <T extends RpcMethodName>(
    method: T,
    handler: WalkieRpcHandler<T>,
    force = false
  ) => {
    if (!force && typeof handlers[method] === 'function') {
      throw new Error(`RPC method ${method} already implemented.`)
    }
    Object.assign(handler, {
      [method]: handler,
    })
  }

const warpHandlerRemover =
  (handlers: WalkieRpcHandlerStore) =>
  <T extends RpcMethodName>(method: T) => {
    delete handlers[method]
  }

export default createPtpNode
