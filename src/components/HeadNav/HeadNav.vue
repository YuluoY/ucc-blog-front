<template>
  <u-layout class="head-nav" mode="row">
    <u-region class="head-nav-logo" :span="1" align="center" justify="center">
      <div class="head-nav-logo-img" @click="router.push('/')">
        <img :src="logo" alt="随机图片" />
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
  window.UApp.routes.filter((v: RouteRecordRaw) => v.name && v.path.split('/').length === 2 && !v.meta?.isHidden)
)

const logo = ref(window.UApp.logo)
</script>

<style lang="scss" scoped>
.head-nav {
  min-height: inherit;
  box-shadow: var(--uc-shadow-2);
  background-color: var(--uc-background-1);
  padding: 0.5rem 1rem;
  .head-nav-logo {
    .head-nav-logo-img {
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
  }
  .head-nav-menu {
  }
}
</style>
