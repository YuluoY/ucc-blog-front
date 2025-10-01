import { faker } from '@faker-js/faker'

/**
 * 复制对象
 * @param target 对象
 * @param param1 { min: number, max: number }
 * @returns 对象数组
 * @example
 * toCopy(createUser(), { min: 1, max: 5 })
 */
export const toCopy = <T = any>(target: T | (() => T), { min = 1, max = 5 } = {}): T[] => Array.from({ length: faker.number.int({ min, max }) }).map(() => toValue(target))

/**
 * 获取随机图片
 * @returns 图片
 * @example
 * getRandomImage()
 */
export const getRandomImage = (): string => new URL(`/src/assets/images/${faker.number.int({ min: 1, max: 15 })}.jpg`, import.meta.url).href