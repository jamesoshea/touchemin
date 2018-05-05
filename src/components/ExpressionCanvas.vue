<template>
  <div class="canvas-container">
    <canvas id="touchemin-expression-canvas" />
  </div>
</template>

<script>
import { getTouchPos } from '../utils/TouchUtils.js';

export default {
  name: 'ExpressionCanvas',
  props: {
    synth: Object,
  },
  data() {
    return {
      canvas: null,
      ctx: null,
      currentX: 0,
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
  },
  mounted() {
    this.canvas = document.getElementById('touchemin-expression-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.ctx.height = window.innerHeight;
    this.canvas.height = window.innerHeight;
    this.ctx.width = window.innerWidth / 3;
    this.canvas.width = window.innerWidth / 3;
    this.canvas.addEventListener('touchstart', e => {
      this.drawPoint(e);
    });
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';

canvas {
  background-color: $darkest-color;
}
</style>
