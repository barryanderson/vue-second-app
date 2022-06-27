import { createStore } from 'vuex';

import coaches from './modules/coaches/index.js';

const store = createStore({
  modules: {
    coaches,
  },
  state() {
    return {
      userId: 'c3',
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
