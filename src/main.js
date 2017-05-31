import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router';
import {routes} from './routes';

Vue.use(VueRouter);

Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(App)
})
