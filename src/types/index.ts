import type {
  CArticleListType,
  CArticleStatus,
  CLanguage,
  CPermissionType,
  CTables,
  CTheme,
  CUserRole
} from './const'

export type Theme = (typeof CTheme)[keyof typeof CTheme]
export type Language = (typeof CLanguage)[keyof typeof CLanguage]
export type Tables = (typeof CTables)[keyof typeof CTables]
export type ArticleStatus = (typeof CArticleStatus)[keyof typeof CArticleStatus]
export type UserRole = (typeof CUserRole)[keyof typeof CUserRole]
export type ArticleListType = (typeof CArticleListType)[keyof typeof CArticleListType]
export type Permission = (typeof CPermissionType)[keyof typeof CPermissionType]
export interface IBaseFields {
  id: string
  createdAt: string
  updatedAt: string
}