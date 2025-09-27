import { useState } from '@/composables/useState'
import { defineStore } from 'pinia'

export const useFooterStore = defineStore('footer', () =>
{

  const [height, setHeight] = useState(80)

  return {
    height,
    setHeight
  }
})