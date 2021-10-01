import { createWebHistory, createRouter } from 'vue-router'

import FrontSpringDemo from './demos/FrontSpring.demo.vue'
import TwoFacesDemo from './demos/TwoFaces.demo.vue'
import AristidebenoistDemo from './demos/Aristidebenoist.demo.vue'

const routes = [
  {
    path: '/',
    name: 'aristidebenoist',
    component: AristidebenoistDemo,
  },
  {
    path: '/frontsprint',
    name: 'frontsprint',
    component: FrontSpringDemo,
  },
  {
    path: '/twofaces',
    name: 'twofaces',
    component: TwoFacesDemo,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
