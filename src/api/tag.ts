import type { ITag } from '@/types/models/tag'
import type { ApiMethod } from './types'
import { createTag, toCopy } from '@/mock'

export interface ITagApis {
  [keyof: string]: ApiMethod
  getTagList: () => Promise<ITag[]>
}

const apis: ITagApis = {
  getTagList()
  {
    return Promise.resolve(
      toCopy(createTag, { min: 10, max: 20 })
    )
  }
}

export default apis
