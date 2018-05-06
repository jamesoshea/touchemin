import Vue from 'vue';
import Vuex from 'vuex';

import ChordsModule from './modules/chords';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    chords: ChordsModule,
  },
});

export default store;
