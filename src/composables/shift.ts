export const isShift = ref(false)

export const shiftKey = ref<'ShiftLeft' | 'ShiftRight' | ''>('')

const switchShift = useToggle(isShift)

export const toggleShift = (key: 'ShiftLeft' | 'ShiftRight' | '' = '') => {
  switchShift()
  shiftKey.value = key
}

