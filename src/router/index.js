import { createRouter, createWebHistory } from 'vue-router'
import Index from '../index/index.vue' // 替换成你的实际组件路径

const routes = [
  {
    path: '/',
    redirect: '/login' // 默认跳转到登录页
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../login/index.vue') // 懒加载登录页
  },
  {
    path: '/index',
    name: 'Index',
    component: Index,
    meta: { requiresAuth: true } // 如果需要登录才能访问首页，可以添加这个元信息
  }
  // 其他路由配置...
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
