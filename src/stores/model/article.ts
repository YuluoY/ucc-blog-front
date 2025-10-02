import api from '@/api'
import { CTables } from '@/types/const'
import type { IArticle } from '@/types/models/article'
import { useState } from '@/utils'
import { defineStore } from 'pinia'


export const useArticleStore = defineStore('article', () =>
{
  const [articleList, setArticleList] = useState<IArticle[]>([])

  const qryArticleList = async() =>
  {
    const articleList = await api(CTables.ARTICLE).getArticleList()
    setArticleList(articleList)
  }

  const findArticleById = (id: string) =>
  {
    return articleList.value.find(article => article.id === id)
  }

  onBeforeMount(() =>
  {
    qryArticleList()
  })

  return {
    articleList,
    setArticleList,
    qryArticleList,
    findArticleById
  }
})