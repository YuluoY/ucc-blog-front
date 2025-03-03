import type { Theme } from '@/types'
import type { RouteRecordRaw } from 'vue-router'
export declare interface UApp {
  prefix: string // 前缀 key
  localKey: string // 本地存储 key
  rootFontSize: number | undefined // 根字体大小
  theme: Theme // 当前主题
  switchTheme(theme: Theme): void // 切换主题
  routes: RouteRecordRaw[] // 路由
  addRoutes(routes: RouteRecordRaw[]): void // 添加路由
  removeRoutes(routes: RouteRecordRaw[]): void // 删除路由
}

window.UApp = reactive({
  prefix: 'UCC-BLOG-',
  localKey: 'UCC-BLOG-UApp',
  rootFontSize: 16,
  theme: document.documentElement.getAttribute('theme') as Theme,
  switchTheme: (theme: Theme) => document.documentElement.setAttribute('theme', theme),

  routes: [],
  addRoutes: (routes: RouteRecordRaw[]) => (window.UApp.routes = [...window.UApp.routes, ...routes]),
  removeRoutes: (routes: RouteRecordRaw[]) => (window.UApp.routes = window.UApp.routes.filter(v => !routes.includes(v)))
})

/**
 * 监听主题变化
 */
watch(() => window.UApp.theme, window.UApp.switchTheme)
