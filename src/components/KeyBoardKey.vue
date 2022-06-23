<script setup lang="ts">
import type { KEYBOARD_KEY, KEY_STYLE } from '@/composables'

const { keydef, keystyle, disabled = false } = defineProps<{
  keydef: KEYBOARD_KEY
  keystyle: KEY_STYLE
  disabled?: boolean
}>()

const showValue = $computed(() => keydef.getValue(isShift.value))
</script>

<template>
  <div>
    <button
      :style="getKeyBoardStyleString(keystyle)" border="~ rounded"
      :class="[
        !disabled ? 'key-hover-base' : '',
      ]"
    >
      {{ showValue }}
    </button>
  </div>
</template>
