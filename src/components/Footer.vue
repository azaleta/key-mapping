<script setup lang="ts">

</script>

<template>
  <nav text-xl mt-6 inline-flex gap-2>
    <button class="icon-btn !outline-none" @click="toggleDark()">
      <div i-carbon-moon dark:i-carbon-sun />
    </button>

    <a
      class="icon-btn" i-carbon-logo-github rel="noreferrer" href="https://https://github.com/azaleta/key-mapping"
      target="_blank" title="GitHub"
    />
  </nav>
</template>
