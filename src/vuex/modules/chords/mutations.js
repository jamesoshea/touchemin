const CHORDS_UPDATED = (state, chords) => {
  state.chords = chords;
};

const UPDATE_SELECTED_CHORD = (state, chord) => {
  state.selectedChord = chord;
};

export default {
  CHORDS_UPDATED,
  UPDATE_SELECTED_CHORD,
};
