import type { ICategory } from '@/types/models/category'
import type { ApiMethod } from './types'
import { createCategory, toCopy } from '@/mock'

export interface ICategoryApis {
  [keyof: string]: ApiMethod
  getCategoryList: () => Promise<ICategory[]>
}

const apis: ICategoryApis = {
  getCategoryList()
  {
    return Promise.resolve(
      toCopy(createCategory, { min: 10, max: 20 })
    )
  }
}

export default apis
