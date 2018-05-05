<template>
  <div class="canvas-container">
    <canvas id="touchemin-note-canvas" />
  </div>
</template>

<script>
import { getTouchPos } from '../utils/TouchUtils.js';
export default {
  name: 'NoteCanvas',
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
      this.ctx.fillStyle = 'white';
      this.ctx.fill();
    }
  },
  mounted() {
    this.canvas = document.getElementById('touchemin-note-canvas');
    this.canvas.style.width ='100%';
    this.canvas.style.height='100%';
    // this.canvas.width  = this.canvas.offsetWidth;
    // this.canvas.height = this.canvas.offsetHeight;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = 'gray';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    window.addEventListener('touchstart', (e) => { 
      Array.from(e.targetTouches).forEach((touch) => {
        if (touch.target === this.canvas) {
          this.drawPoint(touch);
        }
      })
    })
  },
}
</script>
