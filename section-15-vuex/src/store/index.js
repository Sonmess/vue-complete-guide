import { createStore } from 'vuex';
import rootMutations from './mutations';
import rootGetters from './getters';
import rootActions from './actions';
import counterModule from './counter/index';

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: rootMutations,
  getters: rootGetters,
  actions: rootActions,
});

export default store;
