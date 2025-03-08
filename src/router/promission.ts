import type { Router } from 'vue-router'
import dynamicRoutes from './dynamic'

const permission = (router: Router) => {
  let isAddDynamicRoutes = false

  router.beforeEach(async (to, from, next) => {
    if (!isAddDynamicRoutes) {
      // 1. 添加动态路由
      dynamicRoutes.forEach(route => router.addRoute(route))
      window.$uFn.addRoutes(router.getRoutes())
      isAddDynamicRoutes = true
      // 2. 触发重定向
      next({ ...to, replace: true })
      return
    }

    next()
  })
}

export default permission
