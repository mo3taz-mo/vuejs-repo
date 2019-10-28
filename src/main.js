import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

import Vuex from 'vuex'

Vue.use(Vuex)

import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import { Calendar } from '@progress/kendo-dateinputs-vue-wrapper'
import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper'
import { MaskedTextBox, InputsInstaller } from '@progress/kendo-inputs-vue-wrapper'
import { Validator, ValidatorInstaller } from '@progress/kendo-validator-vue-wrapper'

Vue.component(
  Calendar.name,  
  Calendar, 
  Grid.name,
  Grid, 
  GridInstaller.name, 
  GridInstaller, 
  MaskedTextBox.name, 
  InputsInstaller.name, 
  MaskedTextBox, 
  InputsInstaller,
  Validator,
  Validator.name,
  ValidatorInstaller,
  ValidatorInstaller.name
)
Vue.use(GridInstaller);
Vue.use(InputsInstaller);
Vue.use(ValidatorInstaller)

import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

//solving ($' is not defined (no-undef) vuejs kendo) issue
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

new Vue({
  router,
  i18n,
  render: h => h(App),
  vuetify,

  components: {
    App,
    Calendar,
    Grid,
    GridInstaller,
    MaskedTextBox, 
    InputsInstaller
  }
}).$mount('#app')
