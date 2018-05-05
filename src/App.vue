<template>
  <div id="app">
    <div id="touchemin__expression-canvas-container">
      <ExpressionCanvas :filter="filter"/>
    </div>
    <div id="touchemin__note-canvas-container">
      <NoteCanvas :synth="synth"/>
    </div>
  </div>
</template>

<script>
import Tone from 'tone';

import NoteCanvas from './components/NoteCanvas.vue';
import ExpressionCanvas from './components/ExpressionCanvas.vue';

export default {
  name: 'app',
  components: {
    NoteCanvas,
    ExpressionCanvas,
  },
  data() {
    return {
      filter: null,
      synth: null,
    };
  },
  mounted() {
    const synthOptions = {
      oscillator: {
        type: 'sawtooth',
      },
      envelope: {
        attack: 0.001,
        decay: 0.1,
        sustain: 0.1,
        release: 0.1,
      },
    };
    this.filter = new Tone.Filter({
      type: 'lowpass',
      Q: 12,
    }).toMaster();
    this.synth = new Tone.PolySynth(4, Tone.Synth, synthOptions).chain(this.filter, Tone.Master);
  },
};
</script>

<style lang="scss">
@import 'assets/variables.scss';
html,
body {
  margin: 0;
  background-color: $lightest-color;
}

.canvas-container {
  height: 100%;
  width: 100%;
}

#app {
  position: absolute;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  min-height: 100%;
  min-width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
}

#touchemin__expression-canvas-container {
  flex-basis: 20%;
  height: 100%;
}

#touchemin__note-canvas-container {
  flex-basis: 80%;
  height: 100%;
}
</style>
