import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuex from 'vuex';
import i18n from './i18n';
import FlagIcon from 'vue-flag-icon';

//scss
import './theme/style.css';
import './theme/custom.scss';

//layouts
import Default from './components/Layout/Default.vue';
import NoBars from './components/Layout/NoBars.vue';

//kendo
import '@progress/kendo-ui';
import '@progress/kendo-theme-default/dist/all.css';
import { Calendar } from '@progress/kendo-dateinputs-vue-wrapper';
import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper';
import {
    MaskedTextBox,
    InputsInstaller
} from '@progress/kendo-inputs-vue-wrapper';
import {
    Validator,
    ValidatorInstaller
} from '@progress/kendo-validator-vue-wrapper';

//form validation
// import Vuelidate from 'vuelidate'

//Global

Vue.use(Vuex);
Vue.use(GridInstaller);
Vue.use(InputsInstaller);
Vue.use(ValidatorInstaller);
Vue.use(FlagIcon);
// Vue.use(Vuelidate)

Vue.component(
    //kendo starts
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
    //kendo ends
    //form validation starts
    //Vuelidate,
    //form validation ends
    //bootstrap starts

    //bootstrap ends
);
Vue.component('default-layout', Default);
Vue.component('no-bars-layout', NoBars);

Vue.config.productionTip = false;

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
        GridInstaller,
        MaskedTextBox,
        InputsInstaller
    }
}).$mount('#app');
