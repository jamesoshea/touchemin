<template>
  <div class="canvas-container">
    <canvas id="touchemin-expression-canvas" />
  </div>
</template>

<script>
import { getTouchPos, normaliseScreenHeight } from '../utils/TouchUtils.js';
import { mapNormalisedToHumanHearing } from '../utils/SoundUtils.js';

export default {
  name: 'ExpressionCanvas',
  props: {
    filter: Object,
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
    this.ctx.width = window.innerWidth * 0.2;
    this.canvas.width = window.innerWidth * 0.2;
    this.canvas.addEventListener('touchmove', e => {
      e.preventDefault();
      const normalisedY = normaliseScreenHeight(e.targetTouches[0].clientY, window.innerHeight);
      const newCutoffFrequency = mapNormalisedToHumanHearing(normalisedY);
      this.filter.frequency.setValueAtTime(newCutoffFrequency, 0);
    });
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';

canvas {
  background: linear-gradient($lightest-color, $darkest-color);
}
</style>
