import api from '@/api'
import { CTables } from '@/types/const'
import type { ITag } from '@/types/models/tag'
import { useState } from '@/utils'
import { defineStore } from 'pinia'

export const useTagStore = defineStore('tag', () =>
{
  const [tagList, setTagList] = useState<ITag[]>([])

  const qryTagList = async() =>
  {
    const tagList = await api(CTables.TAG).getTagList()
    setTagList(tagList)
  }

  onBeforeMount(() =>
  {
    qryTagList()
  })

  return {
    tagList,
    setTagList,
    qryTagList
  }
})