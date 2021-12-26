import type bunyan from 'bunyan'

const loggerMethods = [
  'trace',
  'debug',
  'info',
  'warn',
  'error',
  'fatal',
] as const

type DefaultLogger = {
  [T in typeof loggerMethods[number]]: (...args: unknown[]) => void
}

type ValidLogger = DefaultLogger | bunyan | null

const defaultLogger = (() => {
  const ret = {} as DefaultLogger
  loggerMethods.forEach((i) => {
    ret[i] = (...args: unknown[]) => console.log(`[PrbWalkie][${i}]`, ...args)
  })
  Object.freeze(ret)
  return ret
})()

let logger: ValidLogger = defaultLogger

export const setLogger = (l: bunyan | null) => {
  logger = l ? l : defaultLogger
}

export const loggerProxy = new Proxy(
  { ...defaultLogger },
  {
    get: (target, p: typeof loggerMethods[number]) => {
      return logger[p] as (...args: unknown[]) => void
    },
  }
)

export { loggerProxy as logger }

export default loggerProxy
