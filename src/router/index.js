import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '../views/TestView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" about 이름을 동일하게 해주면 번들링 할 때, 하나로 묶어서 내보내줌 */ '../views/AboutView.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
