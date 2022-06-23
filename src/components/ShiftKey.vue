<script setup lang="ts">
import type { KEY_STYLE } from '@/composables'

const { keystyle = getDefaultKeyStyle(), disabled = false, side } = defineProps<{
  keystyle?: KEY_STYLE
  disabled?: boolean
  side: 'ShiftLeft' | 'ShiftRight'
}>()

function onclick() {
  toggleShift(side)
}
</script>

<template>
  <div>
    <button
      :style="getKeyBoardStyleString(keystyle)" border="~ rounded"
      :class="[
        isShift.value && shiftKey.value === side && !disabled ? 'key-active-base' : '',
        !disabled ? 'key-hover-base' : '',
      ]"
      :disabled="disabled"
      @click="onclick"
    >
      Shift
    </button>
  </div>
</template>
