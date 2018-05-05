const CHORDS_UPDATED = (state, chords) => {
  state.chords = chords;
};

const SELECTED_CHORD_UPDATED = (state, chords) => {
  state.chords = chords;
};

export default {
  CHORDS_UPDATED,
  SELECTED_CHORD_UPDATED,
};
