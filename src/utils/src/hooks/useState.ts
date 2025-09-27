import { shallowRef, nextTick } from 'vue'
import type { DeepReadonly, ShallowRef, UnwrapNestedRefs } from 'vue'

type UseStateResult<T> = [ShallowRef<T>, (newState: T) => void]

export const useState = <T>(
  target: T,
  change?: (newState: T) => void
): DeepReadonly<UnwrapNestedRefs<UseStateResult<T>>> =>
{
  const state = shallowRef<T>(target)
  
  const setState = (newState: T, callback?: (newState: T) => void) =>
  {
    if (Object.is(state.value, newState))
      return
    state.value = newState
    nextTick(() =>
    {
      change?.(newState)
      callback?.(newState)
    })
  }

  return readonly<UseStateResult<T>>([
    state,
    setState
  ])
}