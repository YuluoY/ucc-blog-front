<template>
  <div :class="['u-region', 'region-container']" :style="regionStyles">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { URegionProps } from '../types'

defineOptions({
  name: 'URegion'
})
const rootFontSize = inject('rootFontSize') as number
const props = withDefaults(defineProps<URegionProps>(), {})

const regionStyles: CSSProperties = {}
props.width && (regionStyles.width = props.width / rootFontSize + 'rem')
</script>
