import mitt from 'mitt'

export const emitter = mitt()

export interface keyPayload {
  keyValue: string
}

export const KEY_PRESS_EVENT = Symbol('keyEvent')
export const KEY_MAPPING_EVENT = Symbol('keyEvent')
// export const SHIFT_PRESS_EVENT = Symbol('shiftPressEvent')
