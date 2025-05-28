<template>
  <u-layout class="layout-base">
    <u-region region="top" class="layout-base__top">
      <HeadNav ref="headNavRef"></HeadNav>
      <HomeHero
        v-if="route.path === '/' || route.path === '/home'"
        class="layout-base__hero"
        :style="{ height: centerHeight }"
        :title="heroTitle"
        :desc="heroDesc"
        :top="heroTop"
        :gap="heroContentGap"
        :title-style="titleStyle"
        :desc-style="descStyle"
      />
    </u-region>
    <u-region region="center" class="layout-base__center">
      <u-layout>
        <u-region region="left" class="layout-center__left">
          <SideLeft></SideLeft>
        </u-region>
        <u-region region="center" class="layout-center__center">
          <slot></slot>
        </u-region>
        <u-region region="right" class="layout-center__right">
          <SideRight></SideRight>
        </u-region>
      </u-layout>
    </u-region>
    <u-region region="bottom" class="layout-base__bottom">
      <BottomInfo></BottomInfo>
    </u-region>
  </u-layout>
</template>

<script setup lang="ts">
import HeadNav from '@/components/HeadNav.vue'
import BottomInfo from '@/components/BottomInfo.vue'
import { pxToRem } from 'ucc-utils'
import { URegion } from 'ucc-ui'
import { CENTER_HEIGHT_KEY } from '@/constants'
import HomeHero from '@/components/HomeHero.vue'
import SideLeft from '@/components/SideLeft.vue'
import SideRight from '@/components/SideRight.vue'
defineOptions({
  name: 'LayoutBase'
})

const $u = window.$u
const route = useRoute()

const heroDesc = computed(() => $u.heroDesc)
const heroTitle = computed(() => $u.heroTitle)
const heroTop = computed<string>(() => pxToRem($u.heroTop))
const titleStyle = computed(() => $u.heroTitleStyle)
const descStyle = computed(() => $u.heroDescStyle)
const heroContentGap = computed<string>(() => pxToRem($u.heroContentGap))

const headNavRef = ref<InstanceType<typeof HeadNav>>()

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
      centerHeight.value = `calc(100vh - ${headNavRef.value?.$el?.clientHeight}px)`
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
    flex-direction: column;
    .layout-base__hero {
      min-height: v-bind(centerHeight);
    }
  }
  .layout-base__center {
    // min-height: v-bind(centerHeight);
    .layout-center__left,
    .layout-center__right {
      width: 20%;
      position: relative;
    }
    .layout-center__center {
      padding: 1rem;
    }
  }
  .layout-base__bottom {
    min-height: v-bind(bottomInfoHeight);
  }
}
</style>
