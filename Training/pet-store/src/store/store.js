import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

// eslint-disable-next-line import/prefer-default-export
export const store = new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    SET_STORE(state, products) {
      // eslint-disable-next-line no-param-reassign
      state.products = products;
    },
  },
  actions: {
    initStore: ({ commit }) => {
      axios.get('/products.json').then(response => {
        window.console.log(response.data.products);
        commit('SET_STORE', response.data.products);
      });
    },
  },
  getters: {
    products: state => state.products,
  },
});
