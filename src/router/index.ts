import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Container from '../components/container/src/index.vue'
import Home from '../views/Home.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Container,
    children: [
      { path: '/', component: Home },
      {
        path: '/chooseIcon',
        component: () => import('../views/ChooseIcon/index.vue'),
      },
    ],
  },
]
const router = createRouter({ routes, history: createWebHistory() })

export default router
