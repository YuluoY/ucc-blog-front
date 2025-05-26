export interface TryitOptions {
  isToThrow?: boolean
  fnArgs?: any[]
  onErrorFn?: (e: any) => void | null
}

export type TryitResult<T> = Promise<[T, any]>
