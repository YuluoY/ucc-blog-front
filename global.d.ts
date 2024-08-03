import { App } from 'vue'
import Layout from '@/ui/Layout/src/Layout.vue'
import Region from '@/ui/Layout/src/Region.vue'
import type { UApp } from '@/app'

declare module 'vue' {
  export interface GlobalComponents {
    ULayout: typeof Layout
    URegion: typeof Region
  }
}

declare global {
  interface Window {
    UApp: UApp
  }
}

export {}
