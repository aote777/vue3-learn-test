import ccRequest from './request/index'

export const ccReq = new ccRequest({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000,
})
