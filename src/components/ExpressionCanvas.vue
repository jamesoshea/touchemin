<template>
  <div class="canvas-container">
    <canvas id="touchemin-expression-canvas" />
  </div>
</template>

<script>
import { getTouchPos } from '../utils/TouchUtils.js';

export default {
  name: 'ExpressionCanvas',
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
      this.ctx.arc(
        touchPos.x,
        touchPos.y,
        10,
        0,
        Math.PI * 4,
        true
      );
      this.ctx.fillStyle = 'black';
      this.ctx.fill();
    }
  },
  mounted() {
    this.canvas = document.getElementById('touchemin-expression-canvas');
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.canvas.addEventListener('touchstart', (e) => {
      Array.from(e.targetTouches).forEach((touch) => {
        if (touch.target === this.canvas) {
          this.drawPoint(touch);
        }
      })
    });
  },
}
</script>
