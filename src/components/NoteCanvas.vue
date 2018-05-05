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
    };
  },
  methods: {
    drawPoint(touch) {
      this.ctx.beginPath();
      const touchPos = getTouchPos(this.canvas, touch);
      this.ctx.arc(touchPos.x, touchPos.y, 5, 0, Math.PI * 4, true);
      this.ctx.strokeStyle = 'white';
      this.ctx.stroke();
    },
    playNote() {
      this.synth.triggerAttackRelease('C4', '8n');
    },
  },
  mounted() {
    this.canvas = document.getElementById('touchemin-note-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.ctx.height = window.innerHeight;
    this.canvas.height = window.innerHeight;
    this.ctx.width = window.innerWidth / (3 / 2);
    this.canvas.width = window.innerWidth / (3 / 2);
    window.addEventListener('touchstart', e => {
      e.preventDefault();
      Array.from(e.targetTouches).forEach(touch => {
        if (touch.target === this.canvas) {
          this.drawPoint(touch);
          this.playNote(touch);
        }
      });
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
