import state from './state'
import fn from './fn'

const $u = state

/**
 * 监听主题变化
 */
watch(() => $u.theme, fn.switchTheme)

window.$u = $u
window.$uFn = fn

export declare type AppState = typeof state
export declare type AppFn = typeof fn
