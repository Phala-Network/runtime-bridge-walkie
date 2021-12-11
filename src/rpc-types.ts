import type { prb } from './proto.generated'
import type generatedJson from './proto.generated/index.json'

export type RpcMethodName =
  keyof typeof generatedJson['nested']['prb']['nested']['WalkieRpc']['methods']
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
