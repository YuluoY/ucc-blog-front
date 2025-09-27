import { defineStore } from 'pinia'
import { faker } from '@faker-js/faker'
import { useState } from '@/composables/useState'

export const useHeroStore = defineStore('hero', () =>
{
  const [top, setTop] = useState(-100)
  const [title, setTitle] = useState(faker.lorem.words(3))
  const [desc, setDesc] = useState(faker.lorem.paragraph())
  const [gap, setGap] = useState(20)
  const [titleStyles, setTitleStyles] = useState({
    fontSize: 50,
    fontWeight: 600,
    maxWidth: 600,
    marginTop: -120
  })
  const [descStyles, setDescStyles] = useState({
    fontSize: 20,
    fontWeight: 400,
    maxWidth: 1200
  })

  return {
    top,
    title,
    desc,
    gap,
    titleStyles,
    descStyles,
    
    setTop,
    setTitle,
    setDesc,
    setGap,
    setTitleStyles,
    setDescStyles
  }
})