import type { IBaseFields, UserRole } from '..'
import type { IPermission } from './permission'

export interface IRole extends IBaseFields {
  name: UserRole
  desc: string
  permissions: IPermission[]
}

export interface IRoleDto extends Omit<IRole, keyof IBaseFields> {}