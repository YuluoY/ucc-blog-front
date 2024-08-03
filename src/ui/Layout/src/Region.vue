<template>
  <div class="u-region region-container" :style="regionStyles">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { URegionProps } from '../types'

defineOptions({
  name: 'URegion'
})

const props = withDefaults(defineProps<URegionProps>(), {})

const regionStyles: CSSProperties = {}

if (props.region === 'center') {
  regionStyles.flex = 1
  regionStyles.flexGrow = 1
}

if (props.width) {
  regionStyles.width = props.width / 100 + 'vw'
}
</script>
