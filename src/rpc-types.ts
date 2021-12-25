import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { readFileSync } from 'fs'
import protobuf from 'protobufjs'
import type { prb } from './proto.generated'
import type generatedJson from './proto.generated/index.json'

const _generatedJson = JSON.parse(
  readFileSync(
    resolve(
      dirname(fileURLToPath(import.meta.url)),
      './proto.generated/index.json'
    )
  ).toString()
) as typeof generatedJson

export const rpcMethods =
  _generatedJson['nested']['prb']['nested']['WalkieRpc']['methods']

export const pbRoot = protobuf.Root.fromJSON(
  _generatedJson as protobuf.INamespace
)

export type RpcMethodName = keyof typeof rpcMethods
export type UncapitalizedRpcMethodName<T extends RpcMethodName> =
  Uncapitalize<T>
export type RawRpcMethodFunction<T extends RpcMethodName> =
  typeof prb.WalkieRpc.prototype[UncapitalizedRpcMethodName<T>]
export type RpcMethodRequest<T extends RpcMethodName> = Parameters<
  RawRpcMethodFunction<T>
>[0]
export type RpcMethodResponse<T extends RpcMethodName> = ReturnType<
  RawRpcMethodFunction<T>
> extends Promise<infer TT>
  ? TT
  : never
