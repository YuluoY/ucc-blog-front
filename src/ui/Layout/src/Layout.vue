<template>
  <div
    :class="['u-layout', `u-layout__${props.mode}`, 'u-container']"
    :style="{
      padding: `${props.gap / rootFontSize}rem`
    }"
  >
    <component v-for="item in effectRegions" :is="item" :key="item.props?.region" :mode="props.mode" />
    <component v-for="(item, index) in otherRegions" :is="item" :key="index" :mode="props.mode" />
  </div>
</template>

<script setup lang="ts">
import type { Slots, VNode } from 'vue'
import type { ULayoutProps } from '../types'
import Region from './Region.vue'
import { CLayoutMode, CRegion } from '../types/const'

defineOptions({
  name: 'ULayout'
})

const props = withDefaults(defineProps<ULayoutProps>(), {
  mode: CLayoutMode.HORIZONTAL,
  gap: 14
})

/**
 * 获取根元素字体大小
 */
const rootFontSize = parseInt(document.documentElement.style.fontSize)
provide('rootFontSize', rootFontSize)

/**
 * 对插槽处理
 */
const slots = useSlots() as Slots
const slotArr = (slots.default && slots.default()) || []
let effectRegions: VNode[] = [],
  otherRegions: VNode[] = []
for (let item of slotArr) {
  // @ts-ignore
  if (item.type.name === Region.name && Object.values(CRegion).includes(item.props?.region)) effectRegions.push(item)
  else otherRegions.push(item)
}
</script>

<style lang="scss">
.u-layout {
  width: inherit;
  height: inherit;
  display: flex;
  flex-wrap: wrap;
  position: relative;

  .u-region__left,
  .u-region__right,
  .u-region__top,
  .u-region__bottom {
    flex-shrink: 0;
  }

  .u-region__top,
  .u-region__bottom {
    width: 100%;
  }
  .u-region__center {
    flex: 1;
    flex-grow: 1;
    --webkit-flex-grow: 1;
  }
}
.u-layout__horizontal {
  flex-direction: row;
}
.u-layout__vertical {
  flex-direction: column;
}
</style>
