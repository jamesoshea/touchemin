import actions from './actions';
import getters from './getters';
import mutations from './mutations';

import { cMajorChords } from '../../../utils/KeyUtil.js';

const defaultState = {
  chords: [],
  chordsInKey: cMajorChords,
  selectedChord: cMajorChords[6],
};

export default {
  namespaced: true,
  state: defaultState,
  actions,
  getters,
  mutations,
};
