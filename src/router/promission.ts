import type { Router } from 'vue-router'
import dynamicRoutes from './dynamic'
import { useAppStore } from '@/stores/app'

const permission = (router: Router) =>
{
  let isAddDynamicRoutes = false

  router.beforeEach(async(to, from, next) =>
  {
    const { replRoutes } = useAppStore()
    if (!isAddDynamicRoutes)
    {
      // 1. 添加动态路由
      dynamicRoutes.forEach(route => router.addRoute(route))
      replRoutes(router.getRoutes())
      isAddDynamicRoutes = true
      // 2. 触发重定向
      next({ ...to, replace: true })
      return
    }

    next()
  })
}

export default permission
