import * as VueRouter from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import permission from './promission'

const HomeView = () => import('@/views/HomeView.vue')
const AboutView = () => import('@/views/AboutView.vue')
const NotFoundView = () => import('@/views/NotFoundView.vue')

const routes: readonly RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: routes
})

permission(router)

export default router
