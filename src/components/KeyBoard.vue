<script setup lang="ts">
import type { KEYBOARD } from '@/composables'

const { keyboard, disabled = false } = defineProps<{
  keyboard: KEYBOARD
  disabled?: boolean
}>()
</script>

<template>
  <div>
    <KeyRow v-for="row, idx in keyboard.rows" :key="idx" :row="row" :row-index="idx" :disabled="disabled" />
  </div>
</template>

<style lang="scss">
</style>
