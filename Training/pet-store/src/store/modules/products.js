import axios from 'axios';

const state = {
  products: [],
};

const mutations = {
  // eslint-disable-next-line no-shadow
  SET_STORE(state, products) {
    // eslint-disable-next-line no-param-reassign
    state.products = products;
  },
};

const actions = {
  initStore: ({ commit }) => {
    axios.get('/products.json').then(response => {
      window.console.log(response.data.products);
      commit('SET_STORE', response.data.products);
    });
  },
};

const getters = {
  // eslint-disable-next-line no-shadow
  products: state => state.products,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
