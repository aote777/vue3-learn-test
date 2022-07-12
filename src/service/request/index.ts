import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
// axios 可以创建不同的实例

class ccRequest {
  instance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
  }

  get(p: string) {
    this.instance.get(p).then((res) => {
      console.log(res)
    })
  }
}

export default ccRequest
