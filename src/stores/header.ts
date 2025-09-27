import { defineStore } from 'pinia'
import { faker } from '@faker-js/faker'
import { useState } from '@/composables/useState'

export const useHeaderStore = defineStore('header', () =>
{
  
  const [height, setHeight] = useState(0)
  const [logo, setLogo] = useState(new URL('@/assets/images/11.jpg', import.meta.url).href)
  const [name, setName] = useState(faker.person.fullName())
  const [leftWidth, setLeftWidth] = useState(3)

  return {
    logo,
    name,
    leftWidth,
    height,

    setHeight,
    setLogo,
    setName,
    setLeftWidth
  }
})