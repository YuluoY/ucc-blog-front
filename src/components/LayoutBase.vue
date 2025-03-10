<template>
  <u-layout class="layout-base">
    <u-region region="top" class="layout-base__top" ref="navRef">
      <HeadNav></HeadNav>
    </u-region>
    <u-region region="center" class="layout-base__center">
      <slot></slot>
    </u-region>
    <u-region region="bottom" class="layout-base__bottom">
      <BottomInfo></BottomInfo>
    </u-region>
  </u-layout>
</template>

<script setup lang="ts">
import HeadNav from '@/components/HeadNav'
import BottomInfo from '@/components/BottomInfo'
import { pxToRem } from 'ucc-utils'
import type { URegion } from 'ucc-ui'
import { CENTER_HEIGHT_KEY } from '@/constants'

defineOptions({
  name: 'LayoutBase'
})

const navRef = ref<InstanceType<typeof URegion>>()

const topNavHeight = computed<string>(() => pxToRem($u.navHeight))
const bottomInfoHeight = computed<string>(() => pxToRem($u.footerHeight))
const centerHeight = ref<string>('')

provide(
  CENTER_HEIGHT_KEY,
  computed(() => centerHeight.value)
)

const topNavHeightWatcher = watch(
  () => topNavHeight.value,
  () => {
    nextTick(() => {
      centerHeight.value = `calc(100vh - ${pxToRem(navRef.value?.$el?.offsetHeight)})`
    })
  },
  {
    immediate: true
  }
)

onBeforeUnmount(() => {
  topNavHeightWatcher()
})
</script>

<style lang="scss" scoped>
.layout-base {
  min-height: inherit;
  .layout-base__top {
    min-height: v-bind(topNavHeight);
  }
  .layout-base__center {
    min-height: v-bind(centerHeight);
  }
  .layout-base__bottom {
    min-height: v-bind(bottomInfoHeight);
  }
}
</style>
