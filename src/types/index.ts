import type { CTables, CTheme } from './const'

export type Theme = (typeof CTheme)[keyof typeof CTheme]
export type Tables = (typeof CTables)[keyof typeof CTables]