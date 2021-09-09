import Vue from 'vue';
import 'normalize.css/normalize.css';
import i18n from './i18n'
import "./common/plugins"
import "./assets/sys/style/element-hack.less"

import App from './App.vue';
import './icons' // icon

import router from './router';
import store from './store';


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
