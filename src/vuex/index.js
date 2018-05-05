import Vuex from 'vuex';

import ChordsModule from './modules/chords';

const store = new Vuex.Store({
  modules,
});

const modules = {
  ChordsModule,
};

export default store;
