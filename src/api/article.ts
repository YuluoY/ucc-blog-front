import type { IArticle } from '@/types/models/article'
import type { ApiMethod } from './types'
import { createArticle, toCopy } from '@/mock'

export interface IArticleApis {
  [keyof: string]: ApiMethod
  getArticleList: () => Promise<IArticle[]>
}

const apis: IArticleApis = {
  getArticleList()
  {
    return Promise.resolve(
      toCopy(createArticle, { min: 10, max: 20 })
    )
  }
}

export default apis
