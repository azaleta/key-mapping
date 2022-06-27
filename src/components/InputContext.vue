<script setup lang="ts">
</script>

<template>
  <div text-center>
    <div
      v-if="clickedKey.value !== ''"
      flex="~" justify-center items-center
    >
      <div text="sky500/50 dark:sky500" font-bold>
        Your Input is:
      </div>
      <div ml3 text="sky500/50 dark:sky500" font-bold>
        {{ clickedKey.value }}
      </div>
      <div w-10 />
      <div text="yellow500/50 dark:yellow500" font-bold>
        Mapping Key is:
      </div>
      <div ml3 text="yellow500/50 dark:yellow500" font-bold>
        {{ mappingShift.value ? `Shift + ${mappingKey.value}` : mappingKey.value }}
      </div>
    </div>
  </div>
</template>
