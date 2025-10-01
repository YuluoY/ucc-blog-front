import type { ArticleStatus, IBaseFields } from '..'
import type { ICategory } from './category'
import type { ITag } from './tag'
import type { IUser } from './user'

export interface IArticle extends IBaseFields {
  user: IUser
  author: IUser[]
  category: ICategory
  tags: ITag[]
  title: string
  content: string
  desc: string
  cover: string
  status: ArticleStatus
  isPrivate: boolean
  isTop: boolean
  protect: string
  commentCount: number
  likeCount: number
  viewCount: number
  publishedAt: string
}

export interface IArticleDto extends Omit<IArticle, keyof IBaseFields> {
  userId: string
  categoryId: string
  tagIds: string[]
}