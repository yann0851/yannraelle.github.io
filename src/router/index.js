import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Experience_pro from '../views/Experience_pro.vue'
import Cder from '../views/cder.vue'
import ADM from '../views/adm.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/experience',
    name: 'Experience_pro',
    component: Experience_pro
  },
  {
    path: '/cder',
    name: 'Cder',
    component: Cder
  },
  {
    path: '/adm',
    name: 'ADM',
    component: ADM
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
