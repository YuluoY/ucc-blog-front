import api from '@/api'
import { CTables } from '@/types/const'
import type { IUser } from '@/types/models/user'
import { useState } from '@/utils'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () =>
{
  const [user, setUser] = useState<Partial<IUser>>({})

  const qryUser = async() =>
  {
    const user = await api(CTables.USER).getUser()
    setUser(user)
  }

  onBeforeMount(() =>
  {
    qryUser()
  })

  return {
    user,
    setUser
  }
})