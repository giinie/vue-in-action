import Vue from 'vue';
import App from './App.vue';
import router from './router';

import { store } from './store/store';

require('./assets/app.css');

Vue.config.productionTip = false;

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
