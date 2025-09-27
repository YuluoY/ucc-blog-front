import { useState } from 'ucc-utils'
import { defineStore } from 'pinia'

export const useFooterStore = defineStore('footer', () =>
{

  const [height, setHeight] = useState(80)

  return {
    height,
    setHeight
  }
})