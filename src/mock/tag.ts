import { faker } from '@faker-js/faker'

export const createTag = () =>
{
  return {
    id: faker.string.uuid(),
    name: faker.lorem.word(),
    count: faker.number.int({ min: 1, max: 100 }),
    color: faker.color.rgb({ format: 'css', casing: 'lower', prefix: '#' }).replace(/^#/, () =>
    {
      // 生成浅色系,将RGB值调高
      const base = '#'
      const r = Math.floor(Math.random() * 55 + 200).toString(16)
      const g = Math.floor(Math.random() * 55 + 200).toString(16)
      const b = Math.floor(Math.random() * 55 + 200).toString(16)
      return base + r + g + b
    })
  }
}
