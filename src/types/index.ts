import type { CTheme } from './const'

export type Theme = (typeof CTheme)[keyof typeof CTheme]
