/// <reference types="ucc-ui/dist/index.d.ts" />

import { App } from 'vue'
import Layout from '@/ui/Layout/src/Layout.vue'
import Region from '@/ui/Layout/src/Region.vue'
import type { AppState, AppFn } from '@/app'

declare global {
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
  }
}

export {}
