<script setup lang="ts">
import type { KEYBOARD_KEY, KEY_STYLE } from '@/composables'

const { keystyle = getDefaultKeyStyle(), disabled = true, keydef } = defineProps<{
  keystyle?: KEY_STYLE
  disabled?: boolean
  keydef: KEYBOARD_KEY
}>()
</script>

<template>
  <div>
    <button
      :style="getKeyBoardStyleString(keystyle)" border="~ rounded"
      :disabled="disabled"
    >
      {{ keydef.getValue() }}
    </button>
  </div>
</template>
