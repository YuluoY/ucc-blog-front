import type { Theme } from '@/types'
import state from './state'
import fns from './fns'

const UApp = state
const UAppFn = fns

/**
 * 监听主题变化
 */
watch(() => UApp.theme, UAppFn.switchTheme)

window.UApp = UApp
window.UAppFn = UAppFn

export declare type UApp = typeof UApp
export declare type UAppFn = typeof UAppFn
