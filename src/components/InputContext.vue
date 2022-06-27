<script setup lang="ts">
</script>

<template>
  <div
    flex="~" justify-center items-center
  >
    <div flex="~" :style="`width:${KEYBOARD_WIDTH}px`">
      <div text="sky500/50 dark:sky500" font-bold>
        Your Input is:
      </div>
      <div ml3 text="sky500/50 dark:sky500" font-bold>
        {{ clickedKey.value === '' ? ' ' : clickedKey.value }}
      </div>
      <div w-10 />
      <div text="yellow500/50 dark:yellow500" font-bold>
        Mapping Key is:
      </div>
      <div v-if="mappingKey.value !== ''" ml3 text="yellow500/50 dark:yellow500" font-bold>
        {{ mappingShift.value ? `Shift + ${mappingKey.value}` : mappingKey.value }}
      </div>
    </div>
  </div>
</template>
