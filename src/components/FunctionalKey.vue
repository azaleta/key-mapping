<script setup lang="ts">
import type { KEYBOARD_KEY, KEY_STYLE } from '@/composables'

const { keystyle = getDefaultKeyStyle(), disabled = true, keydef, index = -1 } = defineProps<{
  keystyle?: KEY_STYLE
  disabled?: boolean
  keydef: KEYBOARD_KEY
  index?: number
}>()
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
