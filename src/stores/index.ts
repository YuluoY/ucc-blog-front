import { useAppStore } from './app'
import { useHeaderStore } from './header'
import { useFooterStore } from './footer'
import { useHeroStore } from './hero'

import type { App } from 'vue'

export default {
  install(app: App)
  {
    const store = reactive({
      app: useAppStore(),
      header: useHeaderStore(),
      footer: useFooterStore(),
      hero: useHeroStore()
    })
    if (import.meta.env.DEV)
      window.$u = store
  }
}
