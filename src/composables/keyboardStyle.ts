import type { KEY_ROW } from './keyboard/keyboard'

const KEY_HEIGHT = 40
const NORMAL_KEY_WIDTH = 40
const KEY_MARGIN_X = 3
const KEY_MARGIN_Y = 3
export const KEYBOARD_WIDTH = 800

export interface KEY_STYLE {
  width: number
  height: number
  marginX: number
  marginY: number
}

export function getDefaultKeyStyle(): KEY_STYLE {
  return {
    width: NORMAL_KEY_WIDTH,
    height: KEY_HEIGHT,
    marginX: KEY_MARGIN_X,
    marginY: KEY_MARGIN_Y,
  }
}

export function getKeyStyle(line: KEY_ROW, idx: number, lineidx: number): KEY_STYLE {
  return {
    width: getKeyWidth(line, idx, lineidx),
    height: KEY_HEIGHT,
    marginX: KEY_MARGIN_X,
    marginY: KEY_MARGIN_Y,
  }
}
function getKeyWidth(line: KEY_ROW, idx: number, lineidx: number): number {
  const key = line[idx]
  if (isFunctionKey(key.key))
    return calcFunctionKeyWidth(line)

  // key row 2 special case(last key)
  if (lineidx === 1 && idx === line.length - 1)
    return NORMAL_KEY_WIDTH * 1.5

  return NORMAL_KEY_WIDTH
}

function calcFunctionKeyWidth(line: KEY_ROW): number {
  const funKeyCount = getFuncKeyCount(line)
  const normalKeyCount = getNomalKeyCount(line)
  return ((KEYBOARD_WIDTH - (NORMAL_KEY_WIDTH + KEY_MARGIN_X * 2) * normalKeyCount) / funKeyCount) - KEY_MARGIN_X * 2
}

export function getKeyBoardStyleString(keystyle: KEY_STYLE) {
  return `width: ${keystyle.width}px; height: ${keystyle.height}px;margin: ${keystyle.marginY}px ${keystyle.marginX}px;`
}

