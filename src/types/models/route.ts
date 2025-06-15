export interface Route {
  path: string
  name: string
  parent: Route | null
  children: Route[]
  meta: {
    title: string
    isRoute: boolean
    isHidden: boolean
    index: number
  }
}
