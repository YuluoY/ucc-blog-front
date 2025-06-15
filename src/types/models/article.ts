import type { ArticleStatus } from '..'
import type { Category } from './category'
import type { Tag } from './tag'
import type { User } from './user'

export interface Article {
  id: string
  title: string
  desc: string
  cover: string
  status: ArticleStatus
  author: User[]
  content: string
  protect: string // 密码保护
  tags: Tag[]
  commentCount: number
  category: Category[]
  viewCount: number
  likeCount: number
  createdAt: string
  updatedAt: string
  publishedAt: string
  isPrivate: boolean
  isTop: boolean
}
