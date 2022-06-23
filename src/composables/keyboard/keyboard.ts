const ALPHA_KEY_CONST = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] as const

const NUMBER_KEY_CONST = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] as const

const SYMBOL_KEY_CONST = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', '{', ']', '}', '\\', '|', ';', ':', '\'', '"', ',', '<', '.', '>', '/', '?'] as const

// Chg is a special key in JP IME
const SPECIAL_KEY_CONST = ['Chg'] as const

const FUNC_KEY_CONST = ['Esc', 'Tab', 'Quote', 'Backspace', 'Enter', 'ShiftLeft', 'ShiftRight', 'Ctrl', 'Alt', 'Space', 'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown', 'PageUp', 'PageDown', 'End', 'Home', 'Insert', 'Delete', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'Fn', 'Win', 'CapsLock'] as const

export type ALPHA_KEY = typeof ALPHA_KEY_CONST[number]

export type NUMBER_KEY = typeof NUMBER_KEY_CONST[number]

// different keyboard layouts -> all symbols are defined (shift/unshift in english layout)
export type SYMBOL_KEY = typeof SYMBOL_KEY_CONST[number]

export type FUNC_KEY = typeof FUNC_KEY_CONST[number]

export type SPECIAL_KEY = typeof SPECIAL_KEY_CONST[number]

// NUMBER,SYMBL should all be shiftable
export type SHIFTABLE_KEY = NUMBER_KEY | SYMBOL_KEY

export type KEY_TYPE = ALPHA_KEY | FUNC_KEY | SHIFTABLE_KEY | SPECIAL_KEY

export type KEY_VALUE = KEY_TYPE | [SHIFTABLE_KEY, SYMBOL_KEY]

export class KEYBOARD_KEY {
  key: KEY_TYPE
  keyValue: KEY_VALUE
  functionable: boolean

  doClick() {
    if (this.functionable)
      return ''
  }

  getValue(shift = false): string {
    if (typeof this.keyValue === 'string')
      return this.keyValue

    if (shift)
      return this.keyValue[1]

    return this.keyValue[0]
  }

  constructor(keyValue: KEY_VALUE) {
    if (typeof keyValue === 'string') {
      this.key = keyValue
      this.keyValue = keyValue
    }
    else {
      this.key = keyValue[0]
      this.keyValue = keyValue
    }
    if (isFunctionKey(this.key)) {
      // enable shift only
      if (this.key === 'ShiftLeft' || this.key === 'ShiftRight')
        this.functionable = true
      else this.functionable = false
    }
    else { this.functionable = true }
  }
}

export function isFunctionKey(key: any): boolean {
  return FUNC_KEY_CONST.includes(key)
}

export function getFuncKeyCount(line: KEY_ROW) {
  let count = 0
  for (const key of line) {
    if (isFunctionKey(key.key))
      count++
  }
  return count
}

export function getNomalKeyCount(line: KEY_ROW) {
  return line.length - 1 - getFuncKeyCount(line)
}

export function isShiftableKey(keyValue: KEY_VALUE): boolean {
  return !(typeof keyValue === 'string')
}

export interface KEY_MAPPING {
  presskey: KEY_TYPE
  shift: boolean
}

export type KEY_ROW = KEYBOARD_KEY[]
// only mapping 4 rows
export class KEYBOARD {
  rows: KEY_ROW[]
  constructor(rows: KEY_ROW[]) {
    this.rows = rows
  }

  mappingKey(mappingKey: string): KEY_MAPPING | null {
    for (const row of this.rows) {
      for (const key of row) {
        if (key.getValue() === mappingKey)
          return { presskey: key.key, shift: false }
        if (isShiftableKey(key.key)) {
          if (key.getValue(true) === mappingKey)
            return { presskey: key.key, shift: true }
        }
      }
    }
    return null
  }
}

