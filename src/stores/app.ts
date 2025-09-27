import { useRoutes } from '@/composables/useRoutes'
import { useState } from '@/composables/useState'
import type { ArticleListType, Language, Theme } from '@/types'
import { CArticleListType } from '@/types/const'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () =>
{
  // 路由处理
  const {
    routes,
    replRoutes,
    addRoutes,
    refreshRoutes,
    sortedRoutes
  } = useRoutes()

  // 主题
  const [theme, setTheme] = useState<Theme | null>(null, (newTheme: Theme | null) => newTheme && document.documentElement.setAttribute('theme', newTheme))
  // 语言
  const [language, setLanguage] = useState<Language | null>(null, (newLanguage: Language | null) => newLanguage && document.documentElement.setAttribute('lang', newLanguage))
  // 主页文章排版模式
  const [articleListType, setArticleListType] = useState<ArticleListType>(CArticleListType.BASE)
  // 根字体大小
  const [rootFontSize, setRootFontSize] = useState<number>(16)
  
  return {
    rootFontSize,
    routes,
    theme,
    language,
    articleListType,

    setRootFontSize,
    refreshRoutes,
    replRoutes,
    addRoutes,
    sortedRoutes,
    setTheme,
    setLanguage,
    setArticleListType
  }
})