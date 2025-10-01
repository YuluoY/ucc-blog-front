import type { IUser } from '@/types/models/user'
import type { ApiMethod } from './types'
import { createUser } from '@/mock'

export interface IUserApis {
  [keyof: string]: ApiMethod
  getUser: () => Promise<IUser>
}

const apis: IUserApis = {
  getUser()
  {
    return Promise.resolve(createUser())
  }
}

export default apis
