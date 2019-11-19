import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import game from './modules/game.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    game
  },
  plugins: [createPersistedState({
    paths:['game'],
  }),],
});
