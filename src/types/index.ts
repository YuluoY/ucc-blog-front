import type { CArticleStatus, CSocial, CTables, CTheme, CUserRole } from './const'

export type Theme = (typeof CTheme)[keyof typeof CTheme]
export type Tables = (typeof CTables)[keyof typeof CTables]
export type ArticleStatus = (typeof CArticleStatus)[keyof typeof CArticleStatus]
export type UserRole = (typeof CUserRole)[keyof typeof CUserRole]
export type Social = (typeof CSocial)[keyof typeof CSocial]
