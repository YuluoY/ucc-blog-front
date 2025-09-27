import type {
  CArticleListType,
  CArticleStatus,
  CLanguage,
  CSocial,
  CTables,
  CTheme,
  CUserRole
} from './const'

export type Theme = (typeof CTheme)[keyof typeof CTheme]
export type Language = (typeof CLanguage)[keyof typeof CLanguage]
export type Tables = (typeof CTables)[keyof typeof CTables]
export type ArticleStatus = (typeof CArticleStatus)[keyof typeof CArticleStatus]
export type UserRole = (typeof CUserRole)[keyof typeof CUserRole]
export type Social = (typeof CSocial)[keyof typeof CSocial]
export type ArticleListType = (typeof CArticleListType)[keyof typeof CArticleListType]