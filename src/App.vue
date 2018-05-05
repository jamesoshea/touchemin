<template>
  <div id="app">
    <div id="touchemin__expression-canvas-container">
      <ExpressionCanvas :synth="synth"/>
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
      synth: null,
    };
  },
  mounted() {
    this.synth = new Tone.Synth().toMaster();
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
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
  flex-basis: 33%;
  height: 100%;
}

#touchemin__note-canvas-container {
  flex-basis: 67%;
  height: 100%;
}
</style>
