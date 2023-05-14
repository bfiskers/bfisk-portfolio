import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/Projects.vue')
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('../components/Experience.vue')
    },
    {
      path: '/hobbies',
      name: 'hobbies',
      component: () => import('../components/Hobbies.vue')
    }
  ]
})

export default router
