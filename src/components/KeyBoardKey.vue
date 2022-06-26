<script setup lang="ts">
import type { KEYBOARD_KEY, KEY_STYLE } from '@/composables'
const { keydef, keystyle = getDefaultKeyStyle(), disabled = false } = defineProps<{
  keydef: KEYBOARD_KEY
  keystyle?: KEY_STYLE
  disabled: boolean
}>()

const clicked = $computed(() => {
  if (keydef.getValue() === clickedKey.value) {
    mappingShift.value = false
    return true
  }
  if (keydef.getValue(true) === clickedKey.value) {
    mappingShift.value = true
    return true
  }
  mappingShift.value = false
  return false
})

const showValue = $computed(() => disabled ? keydef.getValue() : keydef.getValue(isShift.value))

function onClick() {
  if (clickedKey.value === keydef.key) {
    clickedKey.value = ''
    mappingShift.value = false
  }
  else { clickedKey.value = keydef.key }
}
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
