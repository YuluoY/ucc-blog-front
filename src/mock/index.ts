import { faker as faker } from '@faker-js/faker'

export const fakeUser = {
  name: faker.name.fullName()
}

export const fakeArticleList = Array.from({ length: 100 }).map((_, index) => {
  return {
    id: faker.datatype.uuid(),
    title: faker.lorem.sentence(),
    desc: faker.lorem.paragraphs(3).substring(0, 500),
    cover: faker.image.imageUrl(),
    author: faker.name.fullName(),
    content: faker.lorem.paragraphs(),
    tags: Array.from({ length: faker.datatype.number({ min: 1, max: 5 }) }).map(() => {
      return {
        id: faker.datatype.uuid(),
        name: faker.lorem.word(),
        count: faker.datatype.number({ min: 1, max: 100 }),
        // color: faker.internet.color()
        color: faker.color.rgb({ format: 'css', casing: 'lower', prefix: '#' }).replace(/^#/, () => {
          // 生成浅色系,将RGB值调高
          const base = '#'
          const r = Math.floor(Math.random() * 55 + 200).toString(16)
          const g = Math.floor(Math.random() * 55 + 200).toString(16)
          const b = Math.floor(Math.random() * 55 + 200).toString(16)
          return base + r + g + b
        })
      }
    }),
    viewCount: faker.datatype.number({ min: 1, max: 1000 }),
    likeCount: faker.datatype.number({ min: 1, max: 100 }),
    createdAt: faker.date.recent().toISOString().split('T')[0],
    updatedAt: faker.date.recent().toISOString().split('T')[0],
    publishedAt: faker.date.recent().toISOString().split('T')[0]
  }
})
