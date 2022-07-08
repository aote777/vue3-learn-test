import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
// axios - >

axios.defaults.baseURL = ''

class Request {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
  }

  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then(() => {
      console.log()
    })
  }
}

export default Request
