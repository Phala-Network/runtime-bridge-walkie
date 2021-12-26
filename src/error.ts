import { prb } from './proto.generated'

import ErrorType = prb.error.ResponseErrorType
import IResponseError = prb.error.IResponseError

export const errorTypeStrings = Object.keys(ErrorType)
Object.freeze(errorTypeStrings)

export class PrbError<T extends prb.error.ResponseErrorType> {
  readonly type: T
  readonly message: string
  #pb: prb.error.ResponseError | null

  static fromPb(pb: IResponseError) {
    return new PrbError(pb.type, pb.message)
  }

  constructor(type: T, message = '') {
    this.type = type
    this.message = message
  }

  get isPrbError() {
    return true
  }

  get errorName() {
    return `PrbError(${errorTypeStrings[this.type]})`
  }

  toJsError() {
    const ret = new Error(this.message)
    ret.name = this.errorName
    return ret
  }

  toString() {
    return `${this.errorName}${this.message ? ': ' + this.message : ''}`
  }

  toPb() {
    if (!this.#pb) {
      this.#pb = prb.error.ResponseError.create({
        type: this.type,
        message: this.message,
      })
    }
    return this.#pb
  }

  toBuffer() {
    return prb.error.ResponseError.encode(this.toPb()).finish()
  }
}

export default PrbError
