import '@/app/index'
import type { App } from 'vue'
import { CTheme } from './types/const'
import { useRootFontSize } from './utils'

export default async function beforehand(app: App): Promise<void> {
  /**
   * 设置根字体大小
   */
  useRootFontSize({
    rootFontSize: $u.rootFontSize,
    beforeRefreshCallback: size => ($u.rootFontSize = size!),
    immediate: true
  })

  /**
   * 设置主题
   */
  $u.theme = CTheme.DEFAULT
}
