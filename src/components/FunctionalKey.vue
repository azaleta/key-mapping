<script setup lang="ts">
import type { PropType } from 'vue'
import type { KEYBOARD_KEY, KEY_STYLE } from '@/composables'

const { keystyle = getDefaultKeyStyle(), disabled = true, keydef, index = -1 } = defineProps({
  keystyle: { type: Object as PropType<KEY_STYLE>, required: false },
  disabled: { type: Boolean, required: false },
  keydef: { type: Object as PropType<KEYBOARD_KEY>, required: true },
  index: { type: Number, required: true },
})
</script>

<template>
  <div
    v-if="!keydef.key.startsWith('Shift')"
  >
    <button
      :style="getKeyBoardStyleString(keystyle)" border="~ rounded" text-xs
      :disabled="true"
    >
      {{ keydef.getValue() }}
    </button>
  </div>
  <ShiftKey v-else :disabled="disabled" :keystyle="keystyle" :side="index === 0 ? 'ShiftLeft' : 'ShiftRight'" />
</template>
