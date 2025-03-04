import type { Theme } from '@/types'
import type { RouteRecordRaw } from 'vue-router'
export default {
  /**
   * 切换主题
   * @param theme - 主题
   */
  switchTheme: (theme: Theme) => document.documentElement.setAttribute('theme', theme),
  /**
   * 添加路由
   * @param routes - 路由
   */
  addRoutes: (routes: RouteRecordRaw[]) => {
    window.UApp.routes = [...window.UApp.routes, ...routes]
  },
  /**
   * 删除路由
   * @param routes - 路由
   */
  removeRoutes: (routes: RouteRecordRaw[]) => {
    window.UApp.routes = window.UApp.routes.filter((v: RouteRecordRaw) => !routes.includes(v))
  },

  /**
   * 获取完整的url - 判断是内链还是外链
   * @param url - 链接
   * @returns 完整的url
   */
  getFullUrl: (url: string) => {
    if (url.startsWith('http') || url.startsWith('//')) return url
    return new URL(url, import.meta.url).href
  }
}
