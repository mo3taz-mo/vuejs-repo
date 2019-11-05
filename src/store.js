// Make sure to call Vue.use(Vuex) first if using a module system
import router from './router';
import Vue from 'vue'
import Vuex from 'vuex'
router.push('/dashboard');

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment (state) {
        state.count++
      },
      logout: (state) => {
        state.accessToken = null;
      }
    },
    actions: {
        logout({ commit }) {
            localStorage.removeItem('accessToken');
            commit('logout');
            router.push('/login');
        }
    }
  })