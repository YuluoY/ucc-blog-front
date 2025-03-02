import type { Router } from 'vue-router'
import dynamicRoutes from './dynamic'
const permission = (router: Router) => {
  let isAddDynamicRoutes = false

  router.beforeEach((to, from, next) => {
    if (!isAddDynamicRoutes) {
      isAddDynamicRoutes = true
      dynamicRoutes.forEach(route => router.addRoute(route))
      return next({ ...to, replace: true })
    }

    next()
  })
}

export default permission
