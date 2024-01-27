import axios from 'axios';

const state = {
  products: [],
  session: false,
};

const mutations = {
  // eslint-disable-next-line no-shadow
  SET_STORE(state, products) {
    // eslint-disable-next-line no-param-reassign
    state.products = products;
  },
  // eslint-disable-next-line no-shadow
  SET_SESSION(state, session) {
    // eslint-disable-next-line no-param-reassign
    state.session = session;
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
  // eslint-disable-next-line no-shadow
  session: state => state.session,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
