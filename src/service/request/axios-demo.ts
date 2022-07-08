import axios from 'axios'

// axios 的实例
axios.get('http://localhost:8080')

// promise 本身可以有类型
new Promise<string>((resolve, resject) => {
  resolve('str')
  // resolve(123)
}).then((res: string) => {
  // 此时 res 可以知道 自己本身应该是什么类型
  console.log(res)
})
