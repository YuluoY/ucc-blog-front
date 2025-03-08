import type { CSSProperties, Reactive } from 'vue'
import { pxToRem } from 'ucc-utils'
import { isNumber } from 'lodash-es'
/**
 * 获取字体样式
 */
export const useEffectStyles = (styles: Partial<CSSProperties>): Reactive<CSSProperties> => {
  const style: Reactive<CSSProperties> = reactive(styles)

  const transKeys: (keyof CSSProperties)[] = [
    'fontSize',
    'fontWeight',
    'marginTop',
    'marginBottom',
    'marginLeft',
    'marginRight',
    'paddingTop',
    'paddingBottom',
    'paddingLeft'
  ]
  const keys = Object.keys(style)
  const transform = (style: CSSProperties) => {
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      // if (!transKeys.includes(key as keyof CSSProperties))
      //   continue
      const val = style[key as keyof CSSProperties]
      if (val && typeof val === 'number') style[key as keyof CSSProperties] = pxToRem(val)
    }
  }

  const fontWatcher = watch(
    () => style,
    val => transform(val),
    {
      immediate: true,
      deep: true
    }
  )

  onBeforeUnmount(() => {
    fontWatcher()
  })

  return style
}
