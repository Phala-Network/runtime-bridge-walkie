import {
  RpcMethodName,
  RpcMethodRequest,
  RpcMethodResponse,
  pbRoot,
  rpcMethods,
} from './rpc-types'
import { prb } from './proto.generated'
import type { WalkieHandleOptions, WalkiePtpNode } from './ptp'
import type PeerId from 'peer-id'

import WalkieRpcRequestWrapper = prb.WalkieRpcRequestWrapper
import WalkieRpcResponseWrapper = prb.WalkieRpcResponseWrapper
import pbError = prb.Error
import { randomUUID } from 'crypto'
import concat from 'it-concat'
import pipe from 'it-pipe'
import type { Connection } from 'libp2p'
import type { Multiaddr } from 'multiaddr'
import type BufferList from 'bl'

const CHUNK_SIZE = 2048
const concatBuffer = (s: AsyncIterable<BufferList>) =>
  concat(s, { type: 'buffer' })

export type WalkieRpcHandler<T extends RpcMethodName> = (
  request: RpcMethodRequest<T>,
  ptp: WalkiePtpNode<never>,
  connection: Connection
) => Promise<RpcMethodResponse<T>>

export type WalkieRpcHandlerStore = {
  [T in RpcMethodName]?: WalkieRpcHandler<T>
}

export type HandlerUpdater<T extends RpcMethodName> = (
  method: T,
  handler: WalkieRpcHandler<T>,
  force?: boolean
) => void

export type HandlerRemover<T extends RpcMethodName> = (method: T) => void

export type RpcRequester<T extends RpcMethodName> = (
  target: PeerId | string | Multiaddr,
  method: T,
  request: RpcMethodRequest<T>
) => Promise<RpcResponse<T>>

export type RpcResponse<T extends RpcMethodName> = {
  hasError: boolean
  data?: RpcMethodResponse<T>
  error?: pbError | Error | string
  rawResponse?: WalkieRpcResponseWrapper
}

export type WalkieRpcRequestCallbackStore = {
  [key: string]: (rawRequest: WalkieRpcRequestWrapper) => void
}

const intoChunks = (buffer: Buffer, chunkSize: number) => {
  const result = []
  const len = buffer.length

  if (len <= chunkSize) {
    return [buffer]
  }

  let i = 0
  while (i < len) {
    result.push(buffer.slice(i, (i += chunkSize)))
  }
  return result
}

export const warpRpcRequester = <R extends prb.WalkieRoles>(
  options: WalkieHandleOptions<R>
) => {
  return async <T extends RpcMethodName>(
    target: PeerId | string | Multiaddr,
    method: T,
    request: RpcMethodRequest<T>
  ): Promise<RpcResponse<T>> => {
    let hasError = false
    let rawResponse: RpcResponse<T>['rawResponse']
    let error: RpcResponse<T>['error']
    let data: RpcResponse<T>['data']

    try {
      const requestType = pbRoot.lookupType(rpcMethods[method].requestType)

      const encodedRequest = prb.WalkieRpcRequestWrapper.encode(
        prb.WalkieRpcRequestWrapper.create({
          createdAt: Date.now(),
          nonce: randomUUID(),
          data: requestType.encode(requestType.create(request)).finish(),
          method,
        })
      ).finish()

      const { node } = options
      const { stream } = await node.dialProtocol(target, '/pb')
      const result = await pipe(
        intoChunks(Buffer.from(encodedRequest), CHUNK_SIZE),
        stream,
        concatBuffer
      )
      console.log(111, result)
      // todo
    } catch (e) {
      error = e
      hasError = true
      console.error(e)
    }
    console.log(error)
    prb
    return {
      data,
      hasError,
      error,
      rawResponse,
    }
  }
}

export const handleRpc = <R extends prb.WalkieRoles>(
  options: WalkieHandleOptions<R>
) => {
  options.node.handle('/pb', ({ connection, stream }) => {
    pipe(
      stream.source,
      concatBuffer,
      async (source) => {
        return intoChunks((await source) as unknown as Buffer, CHUNK_SIZE)
      },
      stream.sink
    )
  })
}

export const handleInitPeer = <R extends prb.WalkieRoles>(
  options: WalkieHandleOptions<R>
) => {}
