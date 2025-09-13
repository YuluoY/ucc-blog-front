import type { Theme } from '@/types'
import type { RouteRecordRaw } from 'vue-router'

const fn = {
  /**
   * 切换主题
   * @param theme - 主题
   */
  switchTheme(theme: Theme) {
    document.documentElement.setAttribute('theme', theme)
  },
  /**
   * 添加路由
   * @param routes - 路由
   */
  addRoutes(routes: RouteRecordRaw[]) {
    $u.routes = [...$u.routes, ...routes]
  },
  /**
   * 删除路由
   * @param routes - 路由
   */
  removeRoutes(routes: RouteRecordRaw[]) {
    $u.routes = $u.routes.filter((v: RouteRecordRaw) => !routes.includes(v))
  },

  /**
   * 设置导航栏高度
   * @param height - 高度
   */
  setNavHeight(height: number) {
    $u.navHeight = height
  },

  /**
   * 获取完整的url - 判断是内链还是外链
   * @param url - 链接
   * @returns 完整的url
   */
  getFullUrl(url: string) {
    return new URL(url, import.meta.url).href
  }
}

export type AppFn = typeof fn

export default fn
