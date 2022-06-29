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
        {{ clickedKey === '' ? ' ' : clickedKey }}
      </div>
      <div w-10 />
      <div text="yellow500/50 dark:yellow500" font-bold>
        Mapping Key is:
      </div>
      <div v-if="mappingKey !== ''" ml3 text="yellow500/50 dark:yellow500" font-bold>
        {{ mappingShift ? `Shift + ${mappingKey}` : mappingKey }}
      </div>
    </div>
  </div>
</template>
