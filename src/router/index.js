import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const User = () => import('@/views/User.vue')
const Music = () => import('@/views/Music.vue')
const Movie = () => import('@/views/Movie.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    component: User
  },
  {
    path: '/music',
    component: Music
  },
  {
    path: '/movies',
    component: Movie
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
