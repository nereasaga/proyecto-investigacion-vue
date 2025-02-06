import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/ejemplos-directivas',
      name: 'Ejemplos Directivas',
      component: () => import('../views/EjemplosDirectivas.vue'),
    },
    {
      path: '/ejemplocomputed',
      name: 'Ejemplos Computed',
      component: () => import('../views/EjemploComputed.vue'),
    },
    {
      path: '/ejemplos-wacht-effect',
      name: 'Ejemplos Wacht-Effect',
      component: () => import('../views/EjemploWatchEffect.vue'),
    },
  ],
})

export default router
