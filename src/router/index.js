import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminMainPage from '../modules/admin/AdminMainPage.vue'
import DashboardMainPage from '../modules/dashboard/DashboardMainPage.vue'
import LoginForm from '../modules/login/LoginForm.vue'
// import store from '../store.js';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login-id',
    meta: {layout: 'no-bars'},
    component: LoginForm
  },
  {
    path: '/dashboard',
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


// router.beforeEach((to, from, next) => {
//   store.dispatch('fetchAccessToken');
//   if (to.fullPath === '/dashboard') {
//     if (!store.state.accessToken) {
//       next('/login');
//     }
//   }
//   if (to.fullPath === '/login') {
//     if (store.state.accessToken) {
//       next('/dashboard');
//     }
//   }
//   next();
// });

export default router
