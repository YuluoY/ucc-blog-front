import type { Theme } from '@/types'
import type { RouteRecordRaw } from 'vue-router'

class fn {
  /**
   * 获取应用状态
   * @example
   * const {
   *   heroTop: contentTop,
   * } = $uFn.getAppState(
   *   ['heroTop'],
   *   {
   *     heroTop: (val: number) => pxToRem(val, { unit: 'rem' })
   *   }
   * )
   * @returns 应用状态
   */
  // static getAppState<T extends keyof AppState>(
  //   names: T[],
  //   cbs?: {
  //     [K in T]?: (val: AppState[K]) => any
  //   }
  // ): { [K in T]: ComputedRef<AppState[K]> } {
  //   return names.reduce(
  //     (acc, name) => {
  //       if (!state[name]) {
  //         console.warn(`getAppState: 应用状态${name}不存在`)
  //         return acc
  //       }
  //       acc[name] = computed(() => (cbs?.[name] && isFunction(cbs[name]) ? cbs[name]!(state[name]) : state[name]))
  //       return acc
  //     },
  //     {} as { [K in T]: ComputedRef<AppState[K]> }
  //   )
  // }

  /**
   * 切换主题
   * @param theme - 主题
   */
  static switchTheme(theme: Theme) {
    document.documentElement.setAttribute('theme', theme)
  }
  /**
   * 添加路由
   * @param routes - 路由
   */
  static addRoutes(routes: RouteRecordRaw[]) {
    $u.routes = [...$u.routes, ...routes]
  }
  /**
   * 删除路由
   * @param routes - 路由
   */
  static removeRoutes(routes: RouteRecordRaw[]) {
    $u.routes = $u.routes.filter((v: RouteRecordRaw) => !routes.includes(v))
  }

  /**
   * 获取完整的url - 判断是内链还是外链
   * @param url - 链接
   * @returns 完整的url
   */
  static getFullUrl(url: string) {
    return new URL(url, import.meta.url).href
  }
}

export type AppFn = typeof fn

export default fn
