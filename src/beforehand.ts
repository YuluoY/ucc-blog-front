import '@/app'
import type { App } from 'vue'
import useRootFontSize from './hooks/useRootFontSize'

export default async function beforehand(app: App): Promise<void> {
  /**
   * 设置根字体大小
   */
  useRootFontSize({
    setRootFontSize: size => (window.UApp.rootFontSize = size),
    isAuto: true
  })
}
