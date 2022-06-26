export const isShift = ref(false)
export const mappingShift = ref(false)

export type ShiftSide = 'ShiftLeft' | 'ShiftRight' | ''

export const shiftKey = ref<ShiftSide>('')

const switchShift = useToggle(isShift)

export const toggleShift = (key: ShiftSide = '') => {
  switchShift()
  shiftKey.value = key
}

