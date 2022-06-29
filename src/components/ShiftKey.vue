<script setup lang="ts">
import type { PropType } from 'vue'
import type { KEY_STYLE, ShiftSide } from '@/composables'

const { keystyle = getDefaultKeyStyle(), disabled = false, side } = defineProps({
  keystyle: { type: Object as PropType<KEY_STYLE>, required: false },
  disabled: { type: Boolean, required: false },
  side: { type: String as PropType<Exclude<ShiftSide, ''>> },
})

function onclick() {
  toggleShift(side)
}
</script>

<template>
  <div>
    <button
      :style="getKeyBoardStyleString(keystyle)" border="~ rounded" text-xs
      :class="[
        !disabled ? 'key-hover-base' : '',
        !disabled && isShift && shiftKey === side ? 'key-active-base' : '',
        disabled && mappingShift ? 'key-mapping-base' : '',
      ]"
      :disabled="disabled"
      @click="onclick"
    >
      Shift
    </button>
  </div>
</template>
