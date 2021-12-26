import { createPtpNode } from './ptp'
import { prb } from './proto.generated'
import events from 'events'
import type EventEmitter from 'events'

if (globalThis.process?.release?.name === 'node') {
  ;(
    events as unknown as {
      setMaxListeners: (n: number) => EventEmitter
    }
  ).setMaxListeners(30)
}

export { prb, createPtpNode }
export * from './rpc-types'
export { setLogger } from './logger'
export { PrbError } from './error'
export default createPtpNode
