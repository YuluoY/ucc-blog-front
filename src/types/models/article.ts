import type { Tag } from './tag'

export interface Article {
  id: string
  title: string
  desc: string
  cover: string
  author: string
  content: string
  tags: Tag[]
  viewCount: number
  likeCount: number
  createdAt: string
  updatedAt: string
  publishedAt: string
}
