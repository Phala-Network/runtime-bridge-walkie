import { NOISE as libp2p__noise } from '@chainsafe/libp2p-noise'
import libp2p, { Libp2pConfig } from 'libp2p'
import libp2p__bootstrap from 'libp2p-bootstrap'
import libp2p__dht from 'libp2p-kad-dht'
import libp2p__mdns from 'libp2p-mdns'
import libp2p__mplex from 'libp2p-mplex'
import libp2p__tcp from 'libp2p-tcp'
import type {
  RpcMethodName,
  RpcMethodRequest,
  RpcMethodResponse,
} from './rpc-types'
import type PeerId from 'peer-id'

export type CreatePtpNodeProps = {
  peerId: PeerId
  protocolPrefix: string
  listenAddresses: string[]
  bootstrapAddresses: string[]
}
export interface WalkiePtpNode {
  peerId: PeerId
  protocolPrefix: string
  node: libp2p
  start: libp2p['start']
  on: HandlerUpdater<never>
  off: HandlerRemover<never>
  request: RpcRequester<never>
  // broadcast: RpcBroadcaster<never> : don't implement for now
}

export type WalkieRpcHandler<T extends RpcMethodName> = (
  request: RpcMethodRequest<T>,
  ptp: WalkiePtpNode
) => Promise<RpcMethodResponse<T>>

type WalkieRpcHandlerStore = {
  [T in RpcMethodName]?: WalkieRpcHandler<T>
}

type HandlerUpdater<T extends RpcMethodName> = (
  method: T,
  handler: WalkieRpcHandler<T>
) => void

type HandlerRemover<T extends RpcMethodName> = (method: T) => void

export type RpcRequester<T extends RpcMethodName> = (
  method: T,
  request: RpcMethodRequest<T>
) => Promise<RpcMethodResponse<T>>

export const createPtpNode = async (
  props: CreatePtpNodeProps
): Promise<WalkiePtpNode> => {
  const { peerId, protocolPrefix } = props

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
      protocolPrefix: '/' + protocolPrefix,
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
  })

  const rpcHandlers: WalkieRpcHandlerStore = {}
  handleRpc()

  return {
    peerId,
    protocolPrefix,
    node,
    start: () => node.start(),
    on: warpHandlerUpdater(rpcHandlers),
    off: warpHandlerRemover(rpcHandlers),
    request: warpRpcRequester(),
  }
}

const handleRpc = () => {}

const warpHandlerUpdater =
  (handlers: WalkieRpcHandlerStore) =>
  <T extends RpcMethodName>(method: T, handler: WalkieRpcHandler<T>) => {
    if (typeof handlers[method] === 'function') {
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

const warpRpcRequester =
  () =>
  async <T extends RpcMethodName>(
    method: T,
    request: RpcMethodRequest<T>
  ): Promise<RpcMethodResponse<T>> => {}

export default createPtpNode
