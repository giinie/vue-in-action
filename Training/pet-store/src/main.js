import Vue from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { firestorePlugin } from 'vuefire';
import App from './App.vue';
import router from './router';

import { store } from './store/store';

require('./assets/app.css');

Vue.use(firestorePlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
