import * as VueRouter from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import permission from './promission'

const HomeView = () => import('@/views/HomeView.vue')
const AboutView = () => import('@/views/AboutView.vue')
const NotFoundView = () => import('@/views/NotFoundView.vue')
const FieldView = () => import('@/views/FieldView.vue')
const ReadView = () => import('@/views/ReadView.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      title: '首页',
      isRoute: true,
      index: 1
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      title: '关于',
      isRoute: true,
      index: 2
    }
  },
  {
    path: '/field',
    name: 'field',
    component: FieldView,
    meta: {
      title: '田野',
      isRoute: true,
      index: 3
    }
  },
  {
    path: '/read/:id',
    name: 'read',
    component: ReadView,
    meta: {
      title: '阅读',
      isRoute: true,
      isHidden: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
    meta: {
      isHidden: true
    }
  }
]
const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: routes
})

permission(router)

export default router
