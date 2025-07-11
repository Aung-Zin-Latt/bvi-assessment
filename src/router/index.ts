import { createRouter, createWebHistory } from 'vue-router'
import CompanyRegistration from '../views/CompanyRegistration.vue'

const routes = [
  { path: '/', name: 'Home', component: CompanyRegistration },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
