import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Container from '../container/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Container,
    children: [
      { path: '/', component: () => import('../views/Home.vue') },
      {
        path: '/chooseIcon',
        component: () => import('../views/ChooseIcon/index.vue'),
      },
      {
        path: '/chooseArea',
        component: () => import('../views/ChooseArea/index.vue'),
      },
      {
        path: '/trend',
        component: () => import('../views/Trend/index.vue'),
      },
      {
        path: '/notification',
        component: () => import('../views/Notification/index.vue'),
      },
      {
        path: '/menu',
        component: () => import('../views/Menu/index.vue'),
      },
      {
        path: '/progress',
        component: () => import('../views/Progress/index.vue'),
      },
      {
        path: '/chooseTime',
        component: () => import('../views/ChooseTime/index.vue'),
      },
      {
        path: '/chooseCity',
        component: () => import('../views/ChooseCity/index.vue'),
      },
      {
        path: '/form',
        component: () => import('../views/Form/index.vue'),
      },
    ],
  },
]
const router = createRouter({ routes, history: createWebHistory() })

export default router
