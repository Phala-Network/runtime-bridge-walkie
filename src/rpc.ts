import {
  RpcMethodName,
  RpcMethodRequest,
  RpcMethodResponse,
  pbRoot,
  rpcMethods,
} from './rpc-types'
import { prb } from './proto.generated'
import { randomUUID } from 'crypto'
import PrbError from './error'
import concat from 'it-concat'
import logger from './logger'
import pipe from 'it-pipe'
import type { Connection } from 'libp2p'
import type { Multiaddr } from 'multiaddr'
import type { WalkieHandleOptions } from './ptp'
import type BufferList from 'bl'
import type PeerId from 'peer-id'
import ResponseErrorType = prb.error.ResponseErrorType
import WalkieRpcRequestWrapper = prb.WalkieRpcRequestWrapper
import WalkieRpcResponseWrapper = prb.WalkieRpcResponseWrapper

const CHUNK_SIZE = 1048576
const concatBuffer = (s: AsyncIterable<BufferList>) =>
  concat(s, { type: 'buffer' })

export type WalkieRpcHandler<T extends RpcMethodName> = (
  request?: RpcMethodRequest<T>,
  connection?: Connection,
  options?: WalkieHandleOptions<prb.WalkieRoles>
) => RpcMethodResponse<T> | Promise<RpcMethodResponse<T>>

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
  target: PeerId | string | Multiaddr | Connection,
  method: T,
  request: RpcMethodRequest<T>
) => Promise<RpcResponse<T>>

export type RpcResponse<T extends RpcMethodName> = {
  hasError: boolean
  data?: RpcMethodResponse<T>
  error?: PrbError<ResponseErrorType> | Error | string
  rawResponse?: WalkieRpcResponseWrapper
}

type _BufferList = BufferList & {
  _bufs?: Buffer[]
}

const intoChunks = (buffer: Buffer | Uint8Array, chunkSize: number) => {
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
): RpcRequester<RpcMethodName> => {
  return async <T extends RpcMethodName>(
    target: PeerId | string | Multiaddr | Connection,
    method: T,
    request: RpcMethodRequest<T>
  ): Promise<RpcResponse<T>> => {
    let hasError = false
    let rawResponse: RpcResponse<T>['rawResponse']
    let error: RpcResponse<T>['error']
    let data: RpcResponse<T>['data']

    let instantConnection: Connection

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

      let connection: Connection

      if ((target as Connection).newStream) {
        connection = target as Connection
      } else {
        connection = await node.dialer.connectToPeer(
          target as PeerId | string | Multiaddr
        )
        instantConnection = connection
      }

      const { stream } = await connection.newStream('/pb')

      const responseBuffer = (await pipe(
        intoChunks(Buffer.from(encodedRequest), CHUNK_SIZE),
        stream,
        concatBuffer
      )) as _BufferList
      rawResponse = prb.WalkieRpcResponseWrapper.decode(
        Buffer.concat(responseBuffer._bufs)
      )

      if (rawResponse.hasError) {
        hasError = true
        error = PrbError.fromPb(rawResponse.error)
      } else {
        const responseType = pbRoot.lookupType(rpcMethods[method].responseType)
        data = responseType.decode(
          rawResponse.data
        ) as unknown as RpcMethodResponse<T>
      }
    } catch (e) {
      error = e
      hasError = true
      logger.error(e)
    } finally {
      instantConnection?.close().catch((e) => {
        logger.warn({ target }, 'Error while closing dial connection.', e)
      })
    }
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
        let rawRequest: WalkieRpcRequestWrapper | null = null
        try {
          rawRequest = WalkieRpcRequestWrapper.decode(
            Buffer.concat(((await source) as _BufferList)._bufs)
          )
          return intoChunks(
            await processRpcRequest(rawRequest, connection, options),
            CHUNK_SIZE
          )
        } catch (e) {
          logger.error(e)
          return intoChunks(createErrorResponse(e, rawRequest), CHUNK_SIZE)
        }
      },
      stream.sink
    )
  })
}

const processRpcRequest = async <R extends prb.WalkieRoles>(
  rawRequest: WalkieRpcRequestWrapper,
  connection: Connection,
  options: WalkieHandleOptions<R>
) => {
  const requestType = pbRoot.lookupType(
    rpcMethods[rawRequest.method as RpcMethodName].requestType
  )
  const handler = options.rpcHandlers[rawRequest.method as RpcMethodName]
  if (!handler) {
    throw new PrbError(ResponseErrorType.NOT_FOUND, 'Handler not implemented.')
  }
  const request = requestType.decode(rawRequest.data)
  const processResult = await handler(request, connection, options)
  const responseType = pbRoot.lookupType(
    rpcMethods[rawRequest.method as RpcMethodName].responseType
  )

  return WalkieRpcResponseWrapper.encode(
    WalkieRpcResponseWrapper.create({
      createdAt: Date.now(),
      nonce: randomUUID(),
      requestNonce: rawRequest?.nonce,
      hasError: false,
      data: responseType.encode(processResult).finish(),
    })
  ).finish()
}

const createErrorResponse = (
  _error: PrbError<ResponseErrorType> | Error | string,
  rawRequest: WalkieRpcRequestWrapper | null
) => {
  const error = (
    (_error as PrbError<ResponseErrorType>).isPrbError
      ? _error
      : new PrbError(
          ResponseErrorType.SERVER,
          _error instanceof Error ? _error.toString() : (_error as string)
        )
  ) as PrbError<ResponseErrorType>

  return WalkieRpcResponseWrapper.encode(
    WalkieRpcResponseWrapper.create({
      createdAt: Date.now(),
      nonce: randomUUID(),
      requestNonce: rawRequest?.nonce,
      hasError: true,
      error: error.toPb(),
    })
  ).finish()
}
