import axios, { Axios } from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'
// axios 可以创建不同的实例

// 定义属于当前封装的类型
interface ccRequestInterceptors {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (error: any) => any

  responseInterceptors?: (res: any) => any
  responseInterceptorsCatch?: (error: any) => any
}

interface ccRequestConfig extends AxiosRequestConfig {
  interceptors?: ccRequestInterceptors
  showLoadingBool?: boolean
}

class ccRequest {
  instance: AxiosInstance
  interceptors?: ccRequestInterceptors
  showLoadingBool?: boolean
  loading?: LoadingInstance

  constructor(config: ccRequestConfig) {
    this.showLoadingBool = config.showLoadingBool ?? false
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

    // 添加所有的实例都有的拦截器
    // 请求
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoadingBool) {
          // 开启loading
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据...',
            background: 'pink',
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )
    // 响应
    this.instance.interceptors.response.use(
      (res) => {
        if (this.showLoadingBool) {
          this.loading?.close()
        }
        // 重置loading-tag 防止下一个请求收到影响
        this.showLoadingBool = false
        return res.data
      },
      (err) => {
        if (this.showLoadingBool) {
          this.loading?.close()
        }
        // 重置loading-tag 防止下一个请求收到影响
        this.showLoadingBool = false
        return err
      }
    )
  }

  request<T>(config: ccRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 配置属于单独自己的请求的拦截器
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 返回的请求的拦截器
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res)
          }
          // console.log(res)
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T>(config: ccRequestConfig) {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: ccRequestConfig) {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: ccRequestConfig) {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: ccRequestConfig) {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default ccRequest
