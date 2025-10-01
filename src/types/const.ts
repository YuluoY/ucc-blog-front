export const CTheme = {
  DEFAULT: 'default',
  LIGHT: 'light',
  DARK: 'dark'
} as const

export const CTables = {
  USER: 'user',
  ARTICLE: 'article'
} as const

export const CArticleStatus = {
  DRAFT: 'draft',
  PUBLISHED: 'published',
  DELETED: 'deleted'
} as const

export const CUserRole = {
  ADMIN: 'admin',
  USER: 'user',
  GUEST: 'guest'
} as const

export const CArticleListType = {
  BASE: 'base',
  WATERFALL: 'waterfall',
  CARD: 'card'
} as const

export const CLanguage = {
  ZH: 'zh',
  EN: 'en'
} as const

export const CPermissionType = {
  MENU: 'menu', // 菜单
  BUTTON: 'button'
} as const