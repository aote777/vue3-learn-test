import ccRequest from './request/index'

export const ccReq = new ccRequest({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000,
  showLoadingBool: true,
  interceptors: {
    requestInterceptors: (config) => {
      return config
    },
    requestInterceptorsCatch: (err) => {
      return err
    },
    responseInterceptors: (response) => {
      return response
    },
    // responseInterceptorsCatch: (err) => {
    //   return err
    // },
  },
})
