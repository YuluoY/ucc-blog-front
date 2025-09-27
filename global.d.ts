// eslint-disable-next-line spaced-comment
/// <reference types="ucc-ui/dist/index.d.ts" />

import { App } from 'vue'
import Layout from '@/ui/Layout/src/Layout.vue'
import Region from '@/ui/Layout/src/Region.vue'
import type { AppFn } from '@/app/fn'
import type { IStore } from '@/stores'

declare global {
  const $u: IStore
  const $uFn: AppFn
  interface Window {
    $u: IStore
    $uFn: AppFn
  }
}

declare module 'vue-router' {
  interface RouteMeta {
    index?: number      // 索引
    title?: string      // 标题显示
    isHidden?: boolean  // 是否显示
    isRoute?: boolean   // 是否是路由
    isHero?: boolean    // 是否显示hero封面
    isLeftSide?: boolean  // 左侧side
    isRightSide?: boolean // 右侧side
  }
}

export {}
