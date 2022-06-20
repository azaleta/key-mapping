import { KEYBOARD, KEYBOARD_KEY, type KEY_ROW, type KEY_VALUE } from './keyboard'

const line1 = [
  'Chg',
  ['1', '!'],
  ['2', '"'],
  ['3', '#'],
  ['4', '$'],
  ['5', '%'],
  ['6', '&'],
  ['7', '\''],
  ['8', '('],
  ['9', ')'],
  '0',
  ['-', '='],
  ['^', '~'],
  'Backspace',
]

const line2 = [
  'Tab',
  'Q',
  'W',
  'E',
  'R',
  'T',
  'Y',
  'U',
  'I',
  'O',
  'P',
  ['@', '`'],
  ['[', '{'],
  [']', '}'],
]

const line3 = [
  'CapsLock',
  'A',
  'S',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  [';', '+'],
  [':', '*'],
  'Enter',
]

const line4 = [
  'Shift',
  'Z',
  'X',
  'C',
  'V',
  'B',
  'N',
  'M',
  [',', '<'],
  ['.', '>'],
  ['/', '?'],
  'Shift',
]

const keyRow1: KEY_ROW = line1.map(k => new KEYBOARD_KEY(k as KEY_VALUE))
const keyRow2: KEY_ROW = line2.map(k => new KEYBOARD_KEY(k as KEY_VALUE))
const keyRow3: KEY_ROW = line3.map(k => new KEYBOARD_KEY(k as KEY_VALUE))
const keyRow4: KEY_ROW = line4.map(k => new KEYBOARD_KEY(k as KEY_VALUE))

export const JAPAN_KEYBOARD = new KEYBOARD([
  keyRow1,
  keyRow2,
  keyRow3,
  keyRow4,
])

