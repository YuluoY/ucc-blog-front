import type { Social, UserRole } from '..'

export interface User {
  id: number
  username: string
  email: string
  namec: string
  avatar: string
  bio: string
  role: UserRole
  location: string
  ip: string
  website: {
    url: string
    title: string
    desc: string
    cover: string
  }
  socials: Array<{
    type: Social
    url: string
  }>
  params: Record<string, string>
  isActive: boolean
  isVerified: boolean
  token: string
  failLoginCount: number
  lockoutExpiresAt: Date | null
  lastLoginAt: Date | null
  createdAt: Date
  updatedAt: Date
}
