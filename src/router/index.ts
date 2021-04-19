import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mouse-position',
    name: 'MousePosition',
    component: () => import('../views/MousePosition.vue')
  },
  {
    path: '/click-outside',
    name: 'ClickOutside',
    component: () => import('../views/ClickOutside.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
