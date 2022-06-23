<script setup lang="ts">
import { useEventListener } from '@vueuse/core'

function keyDown(e: KeyboardEvent) {
  e.preventDefault()
  if (e.key === 'Shift') {
    if (isShift.value)
      return
    toggleShift(e.code as 'ShiftLeft' | 'ShiftRight')
  }
}

function keyUp(e: KeyboardEvent) {
  if (e.key === 'Shift')
    toggleShift()

  e.preventDefault()
}

useEventListener(window, 'keydown', (e: KeyboardEvent) => { keyDown(e) })
useEventListener(window, 'keyup', (e: KeyboardEvent) => { keyUp(e) })
</script>

<template>
  <div>mapping</div>
  <div flex="~">
    <KeyBoard />
  </div>
</template>

