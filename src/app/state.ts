import type { Theme } from '@/types'
import { faker } from '@faker-js/faker'
import type { RouteRecordRaw } from 'vue-router'
import { useEffectStyles } from './common'

export default reactive({
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
  theme: document.documentElement.getAttribute('theme') as Theme,

  /**
   ******** header nav *******
   */
  /**
   * 导航栏高度
   */
  navHeight: 50,
  /**
   * 导航栏logo
   */
  logo: new URL('@/assets/images/11.jpg', import.meta.url).href,
  /**
   * 路由信息
   */
  routes: [] as RouteRecordRaw[],
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
  })
})
