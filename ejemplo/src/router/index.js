import { createRouter, createWebHistory } from 'vue-router'

import Home from '../Views/HomeView'
import Login from '../Views/LoginView'
import VistaNueva from '../Views/VistaNueva'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home 
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/nueva',
    name: 'nueva',
    component: VistaNueva
  }
]

const router = createRouter({ 
  history: createWebHistory(), 
  scrollBehavior: () => ({ y: 0 }),
  routes 
})

export default router