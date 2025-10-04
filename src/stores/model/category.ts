import api from '@/api'
import { CTables } from '@/types/const'
import type { ICategory } from '@/types/models/category'
import { useState } from '@/utils'
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', () =>
{
  const [categoryList, setCategoryList] = useState<ICategory[]>([])

  const qryCategoryList = async() =>
  {
    const categoryList = await api(CTables.CATEGORY).getCategoryList()
    setCategoryList(categoryList)
  }

  onBeforeMount(() =>
  {
    qryCategoryList()
  })

  return {
    categoryList,
    setCategoryList,
    qryCategoryList
  }
})