import type { CSSProperties, Reactive } from 'vue'
import { pxToRem } from 'ucc-utils'
/**
 * 获取字体样式
 */
export const useEffectStyles = <T extends CSSProperties>(styles: Partial<T>): Reactive<T> => {
  const style = reactive(styles) as Reactive<CSSProperties>

  const transKeys: (keyof T)[] = [
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
  const transform = (style: T) => {
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      // if (!transKeys.includes(key as keyof T))
      //   continue
      const val = style[key as keyof T]
      if (val && typeof val === 'number') style[key as keyof T] = pxToRem(val)
    }
  }

  watch(
    () => style,
    val => transform(val as T),
    {
      immediate: true,
      deep: true
    }
  )
  return style as CSSProperties as Reactive<T>
}
