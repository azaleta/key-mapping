<script setup lang="ts">
</script>

<template>
  <div flex="~">
    <div text="2xl" font-sans w-800 bg-transparent>
      KeyBoard Mapping for English 101/Japanese 106
    </div>
    <div>
      <nav text-l inline-flex gap-2>
        <button class="icon-btn !outline-none" @click="toggleDark()">
          <div i-carbon-moon dark:i-carbon-sun />
        </button>

        <a
          class="icon-btn" i-carbon-logo-github rel="noreferrer" href="https://github.com/azaleta/key-mapping"
          target="_blank" title="GitHub"
        />
      </nav>
    </div>
  </div>
  <div text="xs" pt-2 font-mono bg-transparent flex="~" justify-center items-center>
    <router-link to="/" bg-blend-color-burn border="~ rounded" text-center p-1 hover="bg-red/75 dark:bg-red text-white">
      Mapping
    </router-link>
    <div px-2>
      |
    </div>
    <router-link to="/handwriting" border="~ rounded" p-1 hover="bg-red/75 dark:bg-red text-white">
      HandWriting
    </router-link>
  </div>
</template>

<style lang="scss">
</style>
