import type { CLayoutMode, CRegion } from './const'

export type Region = (typeof CRegion)[keyof typeof CRegion]

export type LayoutMode = (typeof CLayoutMode)[keyof typeof CLayoutMode]

export interface ULayoutProps {
  mode?: LayoutMode // 布局模式
  gap?: number // 间距
}

export interface URegionProps {
  mode?: LayoutMode // 布局模式
  region: Region // 区域
  width?: number // 宽度
  col?: number // 列数
}
