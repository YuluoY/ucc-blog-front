import type { Component, CSSProperties, ComputedRef, Ref, ShallowRef } from 'vue'
import useMonitDom, { type UseMonitDomOptions } from './useMonitDom'
import { capitalize, debounce } from 'lodash-es'

interface UseWaterfallOptions extends UseMonitDomOptions {
  /**
   * 占位图片
   */
  placeholderImg?: string | string[]
  /**
   * 列数
   */
  column: number
  /**
   * 列间距
   */
  gap?: number
  /**
   * 是否懒加载
   */
  isLazy?: boolean

  /**
   * 是否监听窗口大小变化
   */
  isResize?: boolean

  /**
   * 图片类名
   */
  imgClass?: string
  /**
   * 外边距
   */
  margin?: number

  /**
   * 单位
   */
  unit?: 'px' | 'rem' | 'vw' | 'vh' | 'em'

  /**
   * 像素转换
   */
  onPixelTrans?: (pixel: number) => number

  /**
   * 加载回调
   */
  onLoading?: () => void
  /**
   * 加载条件
   */
  loadCondition?: (entry: IntersectionObserverEntry, value: number) => boolean
}

export interface UseWaterfallReturn {
  Waterfall: Component
  isLoading: Ref<boolean>
  startIndex: Ref<number>
  endIndex: Ref<number>
  rowIndex: Ref<number>
  colsHeight: Ref<number[]>
  colMaxHeight: ComputedRef<number>
  waterfallItemWidth: ComputedRef<number>
  waterfallImages: ShallowRef<HTMLImageElement[]>
  waterfallItems: ShallowRef<HTMLElement[]>
}

const WaterfallStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  position: 'relative',
  width: '100%',
  boxSizing: 'border-box'
}

const WaterfallItemStyle: CSSProperties = {
  position: 'absolute',
  height: 'fit-content',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  transition: 'opacity 0.3s ease-in-out'
}

const WaterfallImageStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'contain'
}

/**
 * 瀑布流类名
 */
const WATERFALL_CLASS = 'waterfall'

/**
 * 瀑布流项类名
 */
const WATERFALL_ITEM_CLASS = 'waterfall-item'

/**
 * 瀑布流布局
 * @param data 数据
 * @param options 配置
 * @returns 瀑布流布局
 * @example
 * ```vue
 * <template>
 *  <Waterfall>
 *    <template #default="{ item, index, styles, classname, isLoading }">
 *      <div :style="styles" :class="classname">
 *        <img :src="item.img" alt="item.title" />
 *      </div>
 *    </template>
 *  </Waterfall>
 * </template>
 * ```
 * ```ts
 * const { Waterfall, isLoading, startIndex, endIndex, rowIndex, colsHeight, colMaxHeight, waterfallItemWidth, waterfallImages, waterfallItems } = useWaterfall(data, options)
 * ```
 */
export default function useWaterfall<
  T extends {
    [key: string]: any
    img: string
    title: string
    desc: string
    id: any
  }[]
>(data: T, options: UseWaterfallOptions): UseWaterfallReturn {

  const { 
    column,
    gap = 0, 
    isLazy = false, 
    imgClass, 
    margin = 20, 
    unit = 'px',
    placeholderImg,
    isResize = false,
    onLoading, 
    loadCondition, 
    onPixelTrans = (pixel: number) => pixel,
    ...monitRest 
  } = options

  const waterfall = ref<HTMLElement>()
  const waterfallItems = shallowRef<HTMLElement[]>([])
  const waterfallImages = shallowRef<HTMLImageElement[]>([])
  const waterfallItemWidth = computed(
    () => ((waterfall.value?.clientWidth || 0) - (gap * (column - 1))) / column
  )
  const colsHeight = ref<number[]>(new Array(column).fill(0))
  const colMaxHeight = computed(() => Math.max(...colsHeight.value))
  const colMinHeightIndex = computed(() => colsHeight.value.indexOf(Math.min(...colsHeight.value)))
  const rowIndex = ref(-1)
  const startIndex = ref(0)
  const endIndex = ref(isLazy ? column : data.length)
  const isLoading = ref(false)

  const _data = computed(() => data.slice(0, ((rowIndex.value || 0) + 1) * column) || [])

  const Waterfall = defineComponent({
    name: capitalize(WATERFALL_CLASS),
    setup(props: { tag?: string }, { slots }) {
      return () =>
        h(
          props.tag || 'div',
          { ref: waterfall, class: WATERFALL_CLASS, style: WaterfallStyle},
          _data.value.map((item, index) =>
            slots.default?.({
              item,
              index,
              styles: {
                ...WaterfallItemStyle,
                opacity: index >= startIndex.value && index < endIndex.value ? '0' : '1'
              },
              classname: WATERFALL_ITEM_CLASS,
              isLoading: isLoading.value
            })
          )
        )
    }
  })

  // 行索引监听
  const rowIndexWatcher = watch(rowIndex, async () => {
    await nextTick()

    // 超出数据长度
    if (rowIndex.value > Math.ceil(data.length / column)) return

    // 懒加载
    if (isLazy) {
      startIndex.value = rowIndex.value * column
      endIndex.value = startIndex.value + column
    }

    await nextTick()

    // 渲染
    render().then(_ => {
      isLoading.value = false
    })
  })

  // 卸载前
  onBeforeUnmount(() => {
    rowIndexWatcher()
  })

  onMounted(async () => {
    // 监听瀑布流
    if (isLazy) monitorWaterfall()
    // 设置行索引
    else rowIndex.value = Math.ceil(data.length / column)
    // 设置宽度
    if (waterfall.value) {
      const scrollbarWidth = getScrollbarWidth(waterfall.value)
      setStyles(waterfall.value, {
        width: `${onPixelTrans(waterfall.value.clientWidth - margin * 2 - scrollbarWidth)}${unit}`,
        margin: `${onPixelTrans(margin)}${unit}`
      })
    }
    // 监听窗口大小变化
    if (isResize) resizeWaterfall()
  })

  /**
   * 渲染瀑布流
   * @returns
   */
  async function render(trigger = false) {
    if (isLoading.value) return
    isLoading.value = true
    await update()
    await nextTick()
    if (!trigger)
    {
      await loadImages()
      await nextTick()
    }
    const items = waterfallItems.value.slice(startIndex.value, endIndex.value)
    items.forEach((item, index) => {
      requestAnimationFrame(() => renderItem(item, colMinHeightIndex.value))
    })
  }

  /**
   * 更新瀑布流
   * @returns
   */
  async function update() {
    const items = Array.from(waterfall.value?.querySelectorAll?.(`.${WATERFALL_ITEM_CLASS}`) || []) as HTMLElement[]
    if (!items.length) return
    waterfallItems.value = items
    waterfallImages.value = items.map(v => v.querySelector(imgClass ? `img.${imgClass}` : 'img') as HTMLImageElement)
  }

  /**
   * 渲染单个项
   * @param item 瀑布流元素
   * @param colIndex 列索引
   */
  async function renderItem(item: HTMLElement, colIndex: number) {
    const colHeight = colsHeight.value[colIndex]
    setStyles(item, {
      width: `${onPixelTrans(waterfallItemWidth.value)}${unit}`,
      display: 'inline-flex',
      opacity: '1',
      top: `${onPixelTrans(colHeight)}${unit}`,
      left: `${onPixelTrans(colIndex * (waterfallItemWidth.value + gap))}${unit}`
    })
    colsHeight.value[colIndex] = colHeight + item.clientHeight + gap

    await nextTick()

    setStyles(waterfall.value!, {
      height: `${onPixelTrans(colMaxHeight.value)}${unit}`
    })

    await nextTick()
  }

  /**
   * 预加载图片 - 等待图片加载完成
   * @returns 图片元素的宽度和高度
   */
  async function loadImages() {
    // 获取需要预加载的图片
    const images = waterfallImages.value.slice(startIndex.value, endIndex.value)
    // 返回所有结果，无论成功失败
    return Promise.allSettled(
      images.map(
        (img, index) =>
          new Promise<{ width: number; height: number; img: HTMLImageElement; colIndex: number }>(resolve => {
            // 缓存列索引
            const colIndex = index
            // 设置默认图片样式
            setStyles(img, WaterfallImageStyle)
            
            // 处理加载成功
            img.onload = _ => {
              resolve({
                width: img.clientWidth,
                height: img.clientHeight,
                img,
                colIndex
              })
            }
            
            // 处理加载失败
            img.onerror = _ => {
              console.warn(`图片加载失败: ${img.src}`)
              // 设置默认使用占位图
              const item = images[colIndex]
              if (Array.isArray(placeholderImg)) {
                item.src = placeholderImg[Math.floor(Math.random() * placeholderImg.length)]
              } else {
                item.src = placeholderImg || ''
              }
              img.onload = _ => {
                resolve({
                  width: img.clientWidth,
                  height: img.clientHeight,
                  img,
                  colIndex
                })
              }
              img.onerror = _ => {
                console.warn(`图片加载失败: ${img.src}`)
                resolve({
                  width: 0,
                  height: 0,
                  img,
                  colIndex
                })
              }
            }
          })
      )
    ).then(results => {
      // 返回所有结果，无论成功失败
      return results.map(result => {
        if (result.status === 'fulfilled') {
          return result.value
        } else {
          // 处理失败情况，返回默认值
          console.error('图片加载失败:', result.reason)
          return {
            width: 0,
            height: 0,
            img: null,
            colIndex: 0
          }
        }
      })
    })
  }

  /**
   * 监听瀑布流
   */
  function monitorWaterfall() {
    const monitOptions: UseMonitDomOptions = {
      onIntersect: (entry, value) => {
        const eBtn = entry.boundingClientRect.bottom
        const vH = window.innerHeight
        const vaild = loadCondition?.(entry, value)
        if (eBtn < vH && !isLoading.value && (vaild || !loadCondition)) {
          rowIndex.value++
          onLoading?.()
        }
      }
    }
    if (isLazy) {
      monitOptions.isKeep = true
      monitOptions.isImmediate = true
    }
    useMonitDom(waterfall.value!, {
      ...monitOptions,
      ...monitRest
    })
  }
  
  /**
   * 监听窗口大小变化
   */
  function resizeWaterfall() {
    const resizeHandler = () => {
      console.log('resize')
      // if (!waterfall.value || !_data.value.length) return
      // const scrollbarWidth = getScrollbarWidth(waterfall.value)
      // setStyles(waterfall.value, {
      //   width: `${onPixelTrans(waterfall.value.clientWidth - margin * 2 - scrollbarWidth)}${unit}`,
      //   margin: `${onPixelTrans(margin)}${unit}`
      // })
    }
    const debounceResizeHandler = debounce(resizeHandler, 100)

    window.addEventListener('resize', debounceResizeHandler, { passive: true })
    // 监听屏幕旋转
    window.addEventListener('orientationchange', debounceResizeHandler, { passive: true })
  }

  return {
    Waterfall,
    isLoading,
    startIndex,
    endIndex,
    rowIndex,
    colsHeight,
    colMaxHeight,
    waterfallItemWidth,
    waterfallImages,
    waterfallItems
  }
}

/**
 * 设置样式
 * @param item 元素
 * @param styles 样式
 */
function setStyles(item: HTMLElement | HTMLElement[], styles: CSSProperties) {
  if (Array.isArray(item)) item.forEach(i => setStyles(i, styles))
  else Object.assign(item.style, styles)
}

/**
 * 获取滚动条宽度
 * @param el 元素
 * @returns 滚动条宽度
 */
const getScrollbarWidth = (el: HTMLElement) => {
  // 创建一个带滚动条的div
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  el.appendChild(outer);
  
  // 创建一个内部div
  const inner = document.createElement('div');
  outer.appendChild(inner);
  
  // 计算滚动条宽度
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
  
  // 清理DOM
  outer.parentNode?.removeChild(outer);
  
  return scrollbarWidth;
}