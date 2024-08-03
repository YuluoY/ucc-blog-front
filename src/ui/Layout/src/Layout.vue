<template>
  <div class="u-layout u-container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { Slots } from 'vue'
import type { ULayoutProps } from '../types'

defineOptions({
  name: 'ULayout'
})

const props = withDefaults(defineProps<ULayoutProps>(), {
  mode: 'horizontal',
  gap: 14
})

const slots = useSlots() as Slots
console.log(slots.default && slots.default())
</script>

<style scoped lang="scss">
.u-layout {
  display: flex;
}
</style>
