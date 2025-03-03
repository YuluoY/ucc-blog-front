<template>
  <u-layout class="u-layout-base">
    <u-region region="top" class="u-region-top">
      <HeadNav></HeadNav>
    </u-region>
    <u-region region="center" class="u-region-center">
      <slot></slot>
    </u-region>
    <u-region region="bottom" class="u-region-bottom">
      <BottomInfo></BottomInfo>
    </u-region>
  </u-layout>
</template>

<script setup lang="ts">
import HeadNav from '@/components/HeadNav'
import BottomInfo from '@/components/BottomInfo'
import { pxToRem } from 'ucc-utils'
defineOptions({
  name: 'LayoutBase'
})

console.log(pxToRem(100))
</script>

<style lang="scss" scoped>
.u-layout-base {
  min-height: inherit;
  .u-region-top {
    height: 3rem;
  }
  .u-region-center {
    height: calc(100vh - 8rem);
  }
  .u-region-bottom {
    height: 5rem;
  }
}
</style>
