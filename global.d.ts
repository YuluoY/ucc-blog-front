/// <reference types="ucc-ui/dist/index.d.ts" />

import { App } from 'vue'
import Layout from '@/ui/Layout/src/Layout.vue'
import Region from '@/ui/Layout/src/Region.vue'
import type { UApp } from '@/app'

declare global {
  interface Window {
    UApp: UApp
  }
}

export {}
