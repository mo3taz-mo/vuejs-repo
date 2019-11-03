import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store.js';

Vue.use(VueRouter)

// const Admin = () => import('../modules/admin/AdminMainPage.vue')
const Login = () => import('../modules/login/LoginForm.vue')
const Dashboard = () => import('../modules/dashboard/DashboardMainPage.vue')
const CreateNewUser = () => import('../modules/admin/users/CreateNewUser.vue')
const UsersList = () => import('../modules/admin/users/UsersList.vue')
// Billing Routes
const ContractCategory = () => import('../modules/billing/contract-category/ContractCategory.vue')
const ContractList = () => import('../modules/billing/contract-list/ContractList.vue')
const AddContractList = () => import('../modules/billing/contract-list/AddContractList.vue')

const routes = [
  {
    path: '/',
    name: 'login-id',
    meta: {layout: 'no-bars'},
    component: Login
  },
  {
    path: '/dashboard',
    name: 'dashboard-id',
    component: Dashboard
  },
  {
    path: '/create-user',
    name: 'create-user',
    component: CreateNewUser
  },
  {
    path: '/user-list',
    name: 'user-list',
    component: UsersList
  },
  {
    path: '/contract-category',
    name: 'contract-category',
    component: ContractCategory
  },
  {
    path: '/contract-list',
    name: 'contract-list',
    component: ContractList
  },
  {
    path: '/add-contract-list',
    name: 'add-contract-list',
    component: AddContractList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'nav-item active',
  scrollBehavior: (to) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  }
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
