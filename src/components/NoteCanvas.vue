<template>
  <div class="canvas-container">
    <canvas id="touchemin-note-canvas" style="width: 100%; height:100%;"/>
  </div>
</template>

<script>
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
      notes: [130.81, 164.81, 196.0, 261.63],
    };
  },
  methods: {
    drawPoint(touch) {
      this.ctx.beginPath();
      const touchPos = getTouchPos(this.canvas, touch.clientX, touch.clientY);
      this.ctx.arc(touchPos.x, touchPos.y, 5, 0, Math.PI * 4, true);
      this.ctx.strokeStyle = 'white';
      this.ctx.stroke();
    },
    mapTouchesToNotes(touches) {
      return Array.from(touches).map(touch => this.notes[touch.identifier]);
    },
    startNotes(touches) {
      this.synth.triggerAttack(this.mapTouchesToNotes(touches));
    },
    endNote(identifier) {
      console.log(this.notes[identifier]);
      this.synth.triggerRelease([this.notes[identifier]]);
    },
  },
  mounted() {
    this.canvas = document.getElementById('touchemin-note-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.ctx.height = window.innerHeight;
    this.canvas.height = window.innerHeight;
    this.ctx.width = window.innerWidth / (3 / 2);
    this.canvas.width = window.innerWidth / (3 / 2);
    this.canvas.addEventListener('touchstart', e => {
      e.preventDefault();
      this.startNotes(e.targetTouches);
      Array.from(e.targetTouches).forEach(touch => {
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
