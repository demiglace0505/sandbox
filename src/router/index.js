import { createRouter, createWebHistory } from 'vue-router'


export const routes = [
  {
    path: '/test/:id',
    name: 'test',
    component: () => import('@/components/One.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
