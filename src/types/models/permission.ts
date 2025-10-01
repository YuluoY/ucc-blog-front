import type { IBaseFields, Permission } from '..'

export interface IPermission extends IBaseFields {
  name: string
  code: string
  desc: string
  type: Permission
  resource: string
  action: string
}

export interface IPermissionDto extends Omit<IPermission, keyof IBaseFields> {}