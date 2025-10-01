import * as VueRouter from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import permission from './promission'

const HomeView = () => import('@/views/HomeView.vue')
const AboutView = () => import('@/views/AboutView.vue')
const NotFoundView = () => import('@/views/NotFoundView.vue')
const ArchiveView = () => import('@/views/ArchiveView.vue')
const ReadView = () => import('@/views/ReadView.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      title: '首页',
      isAffix: true,
      index: 1,
      isHero: true,
      isHidden: true,
      isLeftSide: true,
      isRightSide: true
    }
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      title: '首页',
      isAffix: true,
      index: 1,
      isHero: true,
      isLeftSide: true,
      isRightSide: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      title: '关于',
      isAffix: true,
      index: 3
    }
  },
  {
    path: '/archive',
    name: 'archive',
    component: ArchiveView,
    meta: {
      title: '归档',
      isAffix: true,
      index: 2,
      isLeftSide: true,
      isRightSide: true
    }
  },
  {
    path: '/read/:id',
    name: 'read',
    component: ReadView,
    meta: {
      title: '阅读',
      isAffix: true,
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
