import Vue from 'vue';
import i18n from './i18n'
import "./common/plugins"
import 'normalize.css/normalize.css';

import App from './App.vue';
import router from './router';
import store from './store';

import './icons' // icon

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
