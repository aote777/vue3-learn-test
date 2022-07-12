import axios, { Axios } from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
// axios 可以创建不同的实例

// 定义属于当前封装的类型
interface ccRequestInterceptors {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (error: any) => any

  responseInterceptors?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorsCatch?: (error: any) => any
}

interface ccRequestConfig extends AxiosRequestConfig {
  interceptors?: ccRequestInterceptors
}

class ccRequest {
  instance: AxiosInstance
  interceptors?: ccRequestInterceptors
  constructor(config: ccRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    )
  }

  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default ccRequest
