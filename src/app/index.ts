import state from './state'
import fn from './fn'

/**
 * 监听主题变化
 */
watch(() => state.theme, fn.switchTheme)

window.$u = state
window.$uFn = fn
