import { createStore } from 'vuex';
import productsModule from './modules/products';
import cartModule from './modules/cart';

const store = createStore({
  modules: {
    prods: productsModule,
    cart: cartModule,
  },
  state() {
    return {
      loggedIn: false,
    };
  },
  getters: {
    isLoggedIn(state) {
      return state.loggedIn;
    },
  },
  mutations: {
    login(state) {
      state.loggedIn = true;
    },
    logout(state) {
      state.loggedIn = false;
    },
  },
  actions: {
    login(context) {
      context.commit('login');
    },

    logout(context) {
      context.commit('logout');
    },
  },
});
export default store;
