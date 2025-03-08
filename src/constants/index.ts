import type { InjectionKey, ComputedRef } from 'vue'

/**
 * center 高度 - provide key
 */
export const CENTER_HEIGHT_KEY: InjectionKey<ComputedRef<string>> = Symbol('centerHeight')
