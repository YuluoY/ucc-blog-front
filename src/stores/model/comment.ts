import api from '@/api'
import { CTables } from '@/types/const'
import type { IComment } from '@/types/models/comment'
import { useState } from '@/utils'
import { defineStore } from 'pinia'

export const useCommentStore = defineStore('comment', () =>
{
  const [commentList, setCommentList] = useState<IComment[]>([])

  const qryCommentList = async() =>
  {
    const commentList = await api(CTables.COMMENT).getCommentList()
    setCommentList(commentList)
  }

  onBeforeMount(() =>
  {
    qryCommentList()
  })

  return {
    commentList,
    setCommentList,
    qryCommentList
  }
})