import '@/app'
import type { App } from 'vue'
import { CTheme } from './types/const'
import { useRootFontSize } from 'ucc-utils/hooks'

export default async function beforehand(app: App): Promise<void> {
  /**
   * 设置根字体大小
   */
  useRootFontSize({
    setRootFontSize: size => (window.UApp.rootFontSize = size),
    isAuto: true
  })

  /**
   * 设置主题
   */
  window.UApp.theme = CTheme.DEFAULT
}
