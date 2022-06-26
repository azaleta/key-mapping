<script setup lang="ts">
import { useEventListener } from '@vueuse/core'
import { clickedKey } from '@/composables'

function keyDown(e: KeyboardEvent) {
  if (e.key === 'Shift') {
    e.preventDefault()
    if (isShift.value)
      return
    toggleShift(e.code as 'ShiftLeft' | 'ShiftRight')
  }
  else { clickedKey.value = e.key.toUpperCase() }
}

function keyUp(e: KeyboardEvent) {
  if (e.key === 'Shift') {
    toggleShift()
    e.preventDefault()
  }
  else { clickedKey.value = '' }
  mappingShift.value = false
}

useEventListener(window, 'keydown', (e: KeyboardEvent) => { keyDown(e) })
useEventListener(window, 'keyup', (e: KeyboardEvent) => { keyUp(e) })
</script>

<template>
  <div flex="col">
    <div>Eng KeyBorad</div>
    <div>
      <KeyBoard :keyboard="USA_KEYBOARD" />
    </div>
    <div mt5>
      JPN KeyBorad
    </div>
    <div>
      <KeyBoard :keyboard="JAPAN_KEYBOARD" :disabled="true" />
    </div>
  </div>
</template>

