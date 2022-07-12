import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
console.log('当前baseurl 是多少?', process.env.VUE_APP_BASE_URL)
import './service/request/axios-demo.ts'

// 全局引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
// 注册element-pls
app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')
