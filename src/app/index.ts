import type { Theme } from '@/types'
export declare interface UApp {
  prefix: string // 前缀 key
  localKey: string // 本地存储 key
  rootFontSize: number // 根字体大小
  theme: Theme // 当前主题
  switchTheme(theme: Theme): void // 切换主题
}

window.UApp = reactive({
  prefix: 'UCC-BLOG-',
  localKey: 'UCC-BLOG-UApp',
  rootFontSize: parseInt(document.documentElement.style.fontSize),
  theme: document.documentElement.getAttribute('theme') as Theme,
  switchTheme: (theme: Theme) => document.documentElement.setAttribute('theme', theme)
})

/**
 * 监听主题变化
 */
watch(() => window.UApp.theme, window.UApp.switchTheme)
