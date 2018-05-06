const selectChord = (context, payload) => {
  context.commit('UPDATE_SELECTED_CHORD', payload);
};

export default { selectChord };
