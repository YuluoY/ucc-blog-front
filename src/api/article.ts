import { fakeArticleList } from '@/mock'
import type { Article } from '@/types/models/article'
import type { ApiMethod } from './types'

export interface IArticleApis {
  [keyof: string]: ApiMethod
  getArticleList: () => Promise<Article[]>
}

const apis: IArticleApis = {
  getArticleList()
  {
    return Promise.resolve(fakeArticleList)
  }
}

export default apis
