<script setup lang="ts">
import type { PropType } from 'vue'
import type { KEYBOARD_KEY, KEY_STYLE } from '@/composables'
const { keydef, keystyle = getDefaultKeyStyle(), disabled = false } = defineProps({
  keydef: { type: Object as PropType<KEYBOARD_KEY>, required: true },
  keystyle: { type: Object as PropType<KEY_STYLE>, required: false },
  disabled: { type: Boolean, required: false },
})

const clicked = $computed(() => {
  if (keydef.getValue() === clickedKey.value || keydef.getValue(true) === clickedKey.value)
    return true
  return false
})

const showValue = $computed(() => disabled ? keydef.getValue() : keydef.getValue(isShift.value))

function onClick() {
  if (clickedKey.value === keydef.key || clickedKey.value === keydef.getValue(true)) {
    clickedKey.value = ''
    mappingShift.value = false
  }
  else {
    clickedKey.value = isShift.value ? keydef.getValue(true) : keydef.getValue()
  }
}

watchEffect(() => {
  if (disabled && keydef.getValue(true) === clickedKey.value)
    mappingShift.value = !!isShiftableKey(keydef.keyValue)
})

// in somecase, you click(use mouse) keyboard (Shift +1) then click shift again to disable shift
emitter.on(SHIFT_PRESS_EVENT, () => {
  if (!disabled && (clickedKey.value === keydef.key || clickedKey.value === keydef.getValue(true)))
    clickedKey.value = keydef.getValue(isShift.value)
})
</script>

<template>
  <div>
    <button
      :style="getKeyBoardStyleString(keystyle)" border="~ rounded"
      :class="[
        !disabled ? 'key-hover-base' : '',
        clicked && !disabled ? 'key-active-base' : '',
        clicked && disabled ? 'key-mapping-base' : '',
      ]"
      :disabled="disabled"
      @click="onClick"
    >
      {{ showValue }}
    </button>
  </div>
</template>
