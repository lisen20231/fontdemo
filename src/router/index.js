import { createRouter, createWebHistory } from 'vue-router'
import Index from '../layout/index.vue' // 替换成你的实际组件路径
import Layout from '../layout/index.vue'

const routes = [
  {
    path: '/',
    redirect: '/login' // 默认跳转到登录页
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../login/index.vue') // 懒加载登录页
  },
  {
    path: '/index',
    name: 'Index',
    component: Index,
    meta: { requiresAuth: true } // 如果需要登录才能访问首页，可以添加这个元信息
  },
  {
    path: '/demo',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Demo',
        components: {
          default: () => import('../demo/index.vue'), // 默认视图对应右侧内容
          sidebar: () => import('../layout/Sidebar.vue'), // 左侧通用部分
          header: () => import('../layout/Header.vue') // 头部通用部分
        }
      }
    ]
  }

  // 其他路由配置...
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
