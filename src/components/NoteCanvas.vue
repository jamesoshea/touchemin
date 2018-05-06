<template>
  <div id="touchemin__note-canvas"/>
</template>

<script>
import { mapGetters } from 'vuex';
import { getTouchPos } from '../utils/TouchUtils.js';
export default {
  name: 'NoteCanvas',
  props: {
    synth: Object,
  },
  data() {
    return {
      canvas: null,
      ctx: null,
    };
  },
  computed: {
    ...mapGetters({
      selectedChord: 'chords/selectedChord',
    }),
  },
  methods: {
    startNote(identifier) {
      this.synth.triggerAttack(this.selectedChord[identifier]);
    },
    endNote(identifier) {
      this.synth.triggerRelease([this.selectedChord[identifier]]);
    },
  },
  mounted() {
    this.canvas = document.getElementById('touchemin__note-canvas');
    this.canvas.addEventListener('touchstart', e => {
      e.preventDefault();
      Array.from(e.changedTouches).forEach(touch => {
        this.startNote(touch.identifier);
      });
    });
    this.canvas.addEventListener('touchend', e => {
      this.endNote(e.changedTouches[0].identifier);
    });
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';

canvas {
  background-color: $lightest-color;
}

#touchemin__note-canvas {
  height: 85%;
  min-width: 100%;
}
</style>
