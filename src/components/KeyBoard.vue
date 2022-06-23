<script setup lang="ts">
import type { KEYBOARD } from '@/composables'

const { keyboard } = defineProps<{
  keyboard?: KEYBOARD
}>()
</script>

<template>
  <div flex="~">
    <ShiftKey side="ShiftLeft" />
    <ShiftKey side="ShiftRight" />
    <ShiftKey disabled side="ShiftLeft" />
    <FunctionalKey :keydef="new KEYBOARD_KEY('Alt')" />
    <KeyBoardKey :keystyle="getDefaultKeyStyle()" :keydef="new KEYBOARD_KEY('A')" />
    <KeyBoardKey :keystyle="getDefaultKeyStyle()" :keydef="new KEYBOARD_KEY('S')" />
    <KeyBoardKey :keystyle="getDefaultKeyStyle()" :keydef="new KEYBOARD_KEY(['1', '!'])" />
  </div>
</template>

<style lang="scss">
</style>
