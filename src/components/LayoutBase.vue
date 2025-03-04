<template>
  <u-layout class="u-layout-base">
    <u-region region="top" class="u-region-top" ref="navRef">
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
import type { URegion } from 'ucc-ui'
defineOptions({
  name: 'LayoutBase'
})

const navRef = ref<InstanceType<typeof URegion>>()

const topNavHeight = computed<string>(() => pxToRem(window.UApp.navHeight, { unit: 'rem' }))
const bottomInfoHeight = computed<string>(() => pxToRem(window.UApp.footerHeight, { unit: 'rem' }))
const centerHeight = ref<string>(
  `calc(100vh - ${pxToRem(navRef.value?.$el?.offsetHeight, { unit: 'rem' })} - ${bottomInfoHeight.value})`
)

watch(
  () => topNavHeight.value,
  () => {
    console.log('asdasdasd')
    nextTick(() => {
      centerHeight.value = `calc(100vh - ${pxToRem(navRef.value?.$el?.offsetHeight, { unit: 'rem' })} - ${bottomInfoHeight.value})`
    })
  }
)

onMounted(() => {
  console.log(navRef.value?.$el?.offsetHeight)
})
</script>

<style lang="scss" scoped>
.u-layout-base {
  min-height: inherit;
  .u-region-top {
    min-height: v-bind(topNavHeight);
  }
  .u-region-center {
    min-height: v-bind(centerHeight);
  }
  .u-region-bottom {
    min-height: v-bind(bottomInfoHeight);
  }
}
</style>
