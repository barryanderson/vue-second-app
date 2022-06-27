import { createStore } from 'vuex';

import coaches from './modules/coaches/index.js';
import requests from './modules/requests/index.js';

const store = createStore({
  modules: {
    coaches,
    requests,
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
