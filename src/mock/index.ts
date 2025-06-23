import type { Article } from '@/types/models/article'
import { faker as faker } from '@faker-js/faker'
import { createUser } from './user'
import { createTag } from './tag'
import { CArticleStatus } from '@/types/const'

const toCopy = (obj: any, { min = 1, max = 5 } = {}) => {
  return Array.from({ length: faker.number.int({ min, max }) }).map(() => obj)
}

export const fakeArticleList = Array.from({ length: 20 }).map((_, index) => {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.sentence(),
    desc: faker.lorem.paragraphs(3).substring(0, 500),
    status: faker.helpers.arrayElement(Object.values(CArticleStatus)),
    cover: faker.image.url(),
    author: toCopy(createUser(), { max: 1 }),
    content: faker.lorem.paragraphs(100),
    protect: faker.helpers.arrayElement([faker.lorem.word(), '', '', '', '']),
    commentCount: faker.number.int({ min: 1, max: 100 }),
    tags: toCopy(createTag()),
    viewCount: faker.number.int({ min: 1, max: 1000 }),
    likeCount: faker.number.int({ min: 1, max: 100 }),
    createdAt: faker.date
      .between({
        from: '2020-01-01',
        to: new Date()
      })
      .toISOString()
      .split('T')[0],
    updatedAt: faker.date
      .between({
        from: '2020-01-01',
        to: new Date()
      })
      .toISOString()
      .split('T')[0],
    publishedAt: faker.date
      .between({
        from: '2020-01-01',
        to: new Date()
      })
      .toISOString()
      .split('T')[0]
  } as Article
})
