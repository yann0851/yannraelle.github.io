import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/experience',
    name: 'Experience_pro',
    component: () => import('../views/Experience_pro.vue')
  },
  {
    path: '/cder',
    name: 'Cder',
    component: () => import('../views/cder.vue')
  },
  {
    path: '/adm',
    name: 'ADM',
    component: () => import('../views/adm.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
