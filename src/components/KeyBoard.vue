<script setup lang="ts">
import type { PropType } from 'vue'
import type { KEYBOARD } from '@/composables'

const { keyboard, disabled = false } = defineProps({
  keyboard: { type: Object as PropType<KEYBOARD>, required: true },
  disabled: { type: Boolean, required: false },
})
</script>

<template>
  <div>
    <KeyRow v-for="row, idx in keyboard.rows" :key="idx" :row="row" :row-index="idx" :disabled="disabled" />
  </div>
</template>

<style lang="scss">
</style>
