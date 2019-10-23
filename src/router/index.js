import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminMainPage from '../modules/admin/AdminMainPage.vue'
import DashboardMainPage from '../modules/dashboard/DashboardMainPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard-id',
    component: DashboardMainPage
  },
  {
    path: '/admin',
    name: 'admin-id',
    component: AdminMainPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
