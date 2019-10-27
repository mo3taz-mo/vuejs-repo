import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import { Calendar } from '@progress/kendo-dateinputs-vue-wrapper'
import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper'

Vue.component(Calendar.name, Calendar, Grid.name, Grid, GridInstaller.name, GridInstaller)
Vue.use(GridInstaller);
Vue.config.productionTip = false

//solving ($' is not defined (no-undef) vuejs kendo) issue
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

new Vue({
  
  router,
  i18n,
  render: h => h(App),
  components: {
    App,
    Calendar,
    Grid,
    GridInstaller
  }
}).$mount('#app')
