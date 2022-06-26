<script setup lang="ts">
import type { PropType } from 'vue'
import type { KEY_STYLE, ShiftSide } from '@/composables'

const { keystyle = getDefaultKeyStyle(), disabled = false, side } = defineProps({
  keystyle: { type: Object as PropType<KEY_STYLE>, required: false },
  disabled: { type: Boolean as PropType<boolean>, required: false },
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
        isShift.value && shiftKey.value === side && !disabled ? 'key-active-base' : '',
        !disabled ? 'key-hover-base' : '',
        disabled && mappingShift.value ? 'key-mapping-base' : '',
      ]"
      :disabled="disabled"
      @click="onclick"
    >
      Shift
    </button>
  </div>
</template>
