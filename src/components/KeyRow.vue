<script setup lang="ts">
import type { PropType } from 'vue'
import type { KEY_ROW } from '@/composables'

const { row, rowIndex, disabled } = defineProps({
  row: { type: Object as PropType<KEY_ROW>, required: true },
  rowIndex: { type: Number, required: true },
  disabled: { type: Boolean, required: true },
})

function getKeyStyleHelper(keyIndex: number) {
  return getKeyStyle(row, keyIndex, rowIndex)
}
</script>

<template>
  <div flex="~" justify-center items-center>
    <div v-for="keydef, idx of row" :key="idx">
      <FunctionalKey v-if="isFunctionKey(keydef.key)" :disabled="disabled" :keydef="keydef" :keystyle="getKeyStyleHelper(idx)" :index="idx" />
      <KeyBoardKey v-else :disabled="disabled" :keydef="keydef" :keystyle="getKeyStyleHelper(idx)" />
    </div>
  </div>
</template>

