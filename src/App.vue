<template>
  <div id="app">
    <div id="touchemin-expression-canvas-container">
      <ExpressionCanvas />
    </div>
    <div id="touchemin-note-canvas-container">
      <NoteCanvas msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
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
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
}

#touchemin-expression-canvas-container {
  flex-basis: 33%;
}

#touchemin-note-canvas-container {
  flex-basis: 66%;
}
</style>
