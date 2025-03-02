import type { RouteRecordRaw } from 'vue-router'

const SettingView = () => import('@/views/SettingView.vue')

const dynamicRoutes: readonly RouteRecordRaw[] = [
  {
    path: '/setting',
    name: 'SettingView',
    component: SettingView,
    meta: {
      title: '设置',
      isRoute: true
    }
  }
]

export default dynamicRoutes
