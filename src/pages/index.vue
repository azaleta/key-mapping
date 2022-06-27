<script setup lang="ts">
import type { ShiftSide } from '@/composables'

const unMapping = $computed(() => clickedKey.value === '' ? false : JAPAN_KEYBOARD.mappingKey(clickedKey.value) === null)

function keyDown(e: KeyboardEvent) {
  if (isFunctionKey(e.key))
    return

  if (e.key === 'Shift') {
    if (isShift.value)
      return
    toggleShift(e.code as Exclude<ShiftSide, ''>)
  }
  else {
    if (clickedKey.value === e.key.toUpperCase())
      return
    clickedKey.value = e.key.toUpperCase()
  }
}

function keyUp(e: KeyboardEvent) {
  if (unMapping) // keep popup show
    return

  if (e.key === 'Shift') { toggleShift() }
  else {
    clickedKey.value = ''
    mappingShift.value = false
  }
}

function closePopup() {
  clickedKey.value = ''
  isShift.value = false
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
  <Teleport to="body">
    <div
      v-if="unMapping"
      absolute top-0 w-full h-full
      bg-gray-900 op-90
      flex="~" justify-center items-center
    >
      <div border="~ rounded" w-80 h-22 overflow-hidden bg-white dark:bg-blue900>
        <p>
          This key is not mapped on JPN keyboard.<br>
          See Handwriting for solution.
        </p>
        <div flex="~" justify-center items-center pt3>
          <button
            text-sm border="~ rounded"
            bg-sky dark:bg-blue900
            @click="closePopup"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

