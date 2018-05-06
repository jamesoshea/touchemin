<template>
  <div class="canvas-container">
    <canvas id="touchemin-note-canvas" style="width: 100%; height:100%;"/>
  </div>
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
    drawPoint(touch) {
      this.ctx.beginPath();
      const touchPos = getTouchPos(this.canvas, touch.clientX, touch.clientY);
      this.ctx.arc(touchPos.x, touchPos.y, 5, 0, Math.PI * 4, true);
      this.ctx.strokeStyle = 'white';
      this.ctx.stroke();
    },
    startNote(identifier) {
      this.synth.triggerAttack(this.selectedChord[identifier]);
    },
    endNote(identifier) {
      this.synth.triggerRelease([this.selectedChord[identifier]]);
    },
  },
  mounted() {
    this.canvas = document.getElementById('touchemin-note-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.ctx.height = window.innerHeight;
    this.canvas.height = window.innerHeight;
    this.ctx.width = window.innerWidth * 0.8;
    this.canvas.width = window.innerWidth * 0.8;
    this.canvas.addEventListener('touchstart', e => {
      e.preventDefault();
      Array.from(e.changedTouches).forEach(touch => {
        this.startNote(touch.identifier);
        this.drawPoint(touch);
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
</style>
