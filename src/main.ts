import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ccRequest from './service/index'

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
