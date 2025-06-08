import type { Theme } from '@/types'
import { faker } from '@faker-js/faker'
import type { RouteRecordRaw } from 'vue-router'
import { useEffectStyles } from './common'
import { CTheme } from '@/types/const'
import type { Reactive } from 'vue'

interface IState {
  prefix: string
  localKey: string
  rootFontSize: number
  theme: Theme
  navHeight: number
  logo: string
  routes: RouteRecordRaw[]
  name: string
  navLeftWidth: number
  footerHeight: number
  heroTop: number
  heroTitle: string
  heroDesc: string
  heroContentGap: number
  heroTitleStyle: Record<string, string | number>
  heroDescStyle: Record<string, string | number>
  articleListType: 'base' | 'waterfall' | 'card'
}

const state: Reactive<IState> = reactive({
  /**
   ********* others *********
   */
  /**
   * 前缀
   */
  prefix: 'UCC-BLOG-',
  /**
   * 本地存储key
   */
  localKey: 'UCC-BLOG-$u',
  /**
   * 根字体大小
   */
  rootFontSize: 16,
  /**
   * 主题
   */
  theme: (document.documentElement.getAttribute('theme') as Theme) || CTheme.DEFAULT,

  /**
   ******** header nav *******
   */
  /**
   * 导航栏高度
   */
  navHeight: 60,
  /**
   * 导航栏logo
   */
  logo: new URL('@/assets/images/11.jpg', import.meta.url).href,
  /**
   * 路由信息
   */
  routes: [],
  /**
   * 用户名称
   */
  name: faker.person.fullName(),
  /**
   * nav-left 宽度
   */
  navLeftWidth: 3,

  /**
   ******** footer info *******
   */
  /**
   * 底部栏高度
   */
  footerHeight: 80,

  /**
   ******** home hero *******
   */
  /**
   * 首页hero内容距离顶部距离
   */
  heroTop: -100,
  /**
   * 首页hero标题
   */
  heroTitle: faker.lorem.words(3),
  /**
   * 首页hero内容描述
   */
  heroDesc: faker.lorem.paragraph(),
  /**
   * 标题和描述之间的距离
   */
  heroContentGap: 20,
  /**
   * 首页hero标题样式
   */
  heroTitleStyle: useEffectStyles({
    fontSize: 50,
    fontWeight: 600,
    maxWidth: 600,
    marginTop: -120
  }),
  /**
   * 首页hero内容描述样式
   */
  heroDescStyle: useEffectStyles({
    fontSize: 20,
    fontWeight: 400,
    maxWidth: 1200
  }),

  /**
   ******** home article list *******
   */
  /**
   * 首页文章列表类型
   */
  articleListType: 'base'
})

export type AppState = typeof state

export default state
