<template>
  <div id="app">
    <div class="touchemin__left-main-container">
      <ChordPicker />
      
    </div>
    <div class="touchemin__right-main-container">
      <NoteCanvas :synth="synth"/>
      <ExpressionCanvas :filter="filter"/>
    </div>
  </div>
</template>

<script>
import Tone from 'tone';

import NoteCanvas from './components/NoteCanvas.vue';
import ExpressionCanvas from './components/ExpressionCanvas.vue';
import ChordPicker from './components/ChordPicker.vue';

export default {
  name: 'app',
  components: {
    NoteCanvas,
    ExpressionCanvas,
    ChordPicker,
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
    console.log(this.synth);
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

.touchemin__left-main-container {
  flex-basis: 10%;
  height: 100%;
}

.touchemin__right-main-container {
  flex-basis: 90%;
  height: 100%;
}
</style>
