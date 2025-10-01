import type { IBaseFields, UserRole } from '..'

export interface IUser extends IBaseFields {
  username: string
  email: string
  namec: string
  avatar: string
  bio: string
  role: UserRole
  location: string
  ip: string
  website: IWebsite
  socials: ISocial[]
  isActive: boolean
  isVerified: boolean
  token: string
  lastLoginAt: string
}

export interface IWebsite {
  url: string
  title: string
  desc: string
  cover: string
}

export interface ISocial {
  type: string
  logo: string
  url: string
}

export interface IUserDto extends Omit<IUser, keyof IBaseFields> {}