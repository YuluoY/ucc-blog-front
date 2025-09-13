<template>
  <u-layout class="layout-base">
    <u-region class="layout-base__top" region="top" :style="topStyles">
      <HeadNav class="layout-base__nav" ref="headNavRef"></HeadNav>
      <HomeHero
        v-show="isHomePage"
        class="layout-base__hero"
        :title="heroTitle"
        :desc="heroDesc"
        :top="heroTop"
        :gap="heroContentGap"
        :title-style="titleStyle"
        :desc-style="descStyle"
      />
    </u-region>
    <u-region region="center" class="layout-base__center" :style="{ marginTop: isHomePage ? '0' : topNavHeight }">
      <u-layout>
        <u-region region="left" class="layout-center__left">
          <SideLeft></SideLeft>
        </u-region>
        <u-region region="center" class="layout-center__center">
          <Suspense>
            <slot></slot>
          </Suspense>
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
import HomeHero from '@/components/HomeHero.vue'
import SideLeft from '@/components/SideLeft/index.vue'
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

const topNavHeight = computed<string>(() => ($u.navHeight ? pxToRem($u.navHeight) : 'auto'))

const bottomInfoHeight = computed<string>(() => pxToRem($u.footerHeight))

const isHomePage = computed(() => route.path === '/' || route.path === '/home')
const topStyles = computed(() => ({ height: isHomePage.value ? '100vh' : 'auto' }))

onMounted(() => {
  if (headNavRef.value?.headNavElement?.$el) $uFn.setNavHeight(headNavRef.value.headNavElement.$el.clientHeight)
})
</script>

<style lang="scss" scoped>
.layout-base {
  min-height: inherit;
  .layout-base__top {
    height: 100vh;
    max-height: 100vh;
    position: relative;
    flex-direction: column;
    .layout-base__nav {
      height: v-bind(topNavHeight);
      // height: fit-content;
    }
    .layout-base__hero {
      flex: 1;
      position: absolute;
      top: 0;
      height: calc(100vh - v-bind(topNavHeight));
      margin-top: v-bind(topNavHeight);
    }
  }
  .layout-base__center {
    padding: 1.6rem;
    // min-height: v-bind(centerHeight);
    .layout-center__left {
      margin-right: 1.6rem;
    }
    .layout-center__right {
      margin-left: 1.6rem;
    }
    .layout-center__left,
    .layout-center__right {
      width: 20%;
      position: relative;
    }
    .layout-center__center {
    }
  }
  .layout-base__bottom {
    height: v-bind(bottomInfoHeight);
    margin-top: 1.6rem;
  }
}
</style>
