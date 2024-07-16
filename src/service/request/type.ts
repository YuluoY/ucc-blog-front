import type { AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse } from 'axios'

// 对AxiosRequestConfig配置进行扩展
export interface IAppInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: AxiosRequestConfig) => InternalAxiosRequestConfig | any
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}

export interface IAppRequestConfig<T = AxiosResponse> extends Partial<InternalAxiosRequestConfig> {
  interceptors?: IAppInterceptors<T>
}
