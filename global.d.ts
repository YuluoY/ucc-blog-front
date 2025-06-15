/// <reference types="ucc-ui/dist/index.d.ts" />

import { App } from 'vue'
import Layout from '@/ui/Layout/src/Layout.vue'
import Region from '@/ui/Layout/src/Region.vue'
import type { AppState } from '@/app/state'
import type { AppFn } from '@/app/fn'

declare global {
  const $u: AppState
  const $uFn: AppFn
  interface Window {
    $u: AppState
    $uFn: AppFn
  }
}

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    isHidden?: boolean
    isRoute?: boolean
    index?: number
  }
}

export {}
