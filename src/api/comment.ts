import type { IComment } from '@/types/models/comment'
import type { ApiMethod } from './types'
import { createComment, toCopy } from '@/mock'

export interface ICommentApis {
  [keyof: string]: ApiMethod
  getCommentList: () => Promise<IComment[]>
}

const apis: ICommentApis = {
  getCommentList()
  {
    return Promise.resolve(
      toCopy(createComment, { min: 10, max: 20 })
    )
  }
}

export default apis
