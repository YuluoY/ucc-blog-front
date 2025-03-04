import type { Theme } from '@/types'
import type { RouteRecordRaw } from 'vue-router'

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
  localKey: 'UCC-BLOG-UApp',
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
   ******** footer info *******
   */
  /**
   * 底部栏高度
   */
  footerHeight: 80
})
