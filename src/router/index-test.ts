import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import login from '@/views/login/login.vue'
import main from '@/views/main/main.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: login,
  },
  {
    path: '/main',
    component: main,
  },
]

const router = createRouter({
  routes,
  history: createWebHashHistory(),
})

export default router
