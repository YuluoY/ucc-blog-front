<template>
  <u-layout class="head-nav" mode="row">
    <u-region class="head-nav-left" :span="navLeftWidth" align="center" justify="around" :title="name">
      <div class="head-nav-left__image" @click="router.push('/')">
        <img :src="logo" alt="随机图片" />
      </div>
      <div class="head-nav-left__name">
        <span>{{ name }}</span>
      </div>
    </u-region>
    <u-region class="head-nav-menu" justify="end">
      <u-menu>
        <template v-for="r in routes" :key="r.path">
          <u-sub-menu v-if="r.children?.length">
            <template #title>
              <span>{{ r.meta?.title }}</span>
            </template>
            <u-menu-item v-for="c in r.children" :key="c.path">
              <span>{{ c.meta?.title }}</span>
            </u-menu-item>
          </u-sub-menu>
          <u-menu-item v-else :route="r.path">
            <span>{{ r.meta?.title }}</span>
          </u-menu-item>
        </template>
      </u-menu>
    </u-region>
  </u-layout>
</template>

<script setup lang="ts">
import { UMenu, UMenuItem, USubMenu } from '@/components/Menu'
import { useRouter, type RouteRecordRaw } from 'vue-router'
defineOptions({
  name: 'HeadNav'
})

const router = useRouter()
const routes = computed(() =>
  $u.routes
    .filter((v: RouteRecordRaw) => v.name && !v.meta?.isHidden)
    .toSorted((a, b) => a.meta?.index! - b.meta?.index!)
)

const logo = computed(() => $u.logo)
const name = computed(() => $u.name)
const navLeftWidth = computed(() => $u.navLeftWidth)
</script>

<style lang="scss" scoped>
.head-nav {
  position: fixed;
  top: 0;
  z-index: 101;
  box-shadow: var(--uc-shadow-2);
  background-color: var(--uc-background-1);
  padding: 0.5rem 1rem;
  .head-nav-left {
    overflow: hidden;
    .head-nav-left__image {
      width: 3rem;
      height: 3rem;
      overflow: hidden;
      border-radius: 50%;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .head-nav-left__name {
      flex: 1;
      margin-left: 0.8rem;
      line-height: 1.5;
      display: inline-block;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      font-size: 1.4rem;
    }
  }
  .head-nav-menu {
    :deep(a) {
      font-size: 1.4rem;
    }
  }
}
</style>
