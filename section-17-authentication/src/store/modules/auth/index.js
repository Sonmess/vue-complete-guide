import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  state() {
    return {
      userId: null,
      token: null,
      autoLogout: false
    };
  },
  mutations,
  getters,
  actions,
};
