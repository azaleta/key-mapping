import mitt from 'mitt'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type SHIFT_CHANGE = {
  isShift: boolean
}

export const emitter = mitt()

export const SHIFT_PRESS_EVENT = Symbol('shiftPressEvent')
