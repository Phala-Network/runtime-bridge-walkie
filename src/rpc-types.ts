import generatedJson from './proto.generated/index.json'
import protobuf from 'protobufjs'
import type { prb } from './proto.generated'

export const rpcMethods =
  generatedJson['nested']['prb']['nested']['WalkieRpc']['methods']

export const pbRoot = protobuf.Root.fromJSON(
  generatedJson as protobuf.INamespace
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
