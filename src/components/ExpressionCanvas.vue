<template>
  <div id="touchemin__expression-canvas"/>
</template>

<script>
import { normaliseScreenWidth } from '../utils/TouchUtils.js';
import { mapNormalisedToHumanHearing } from '../utils/SoundUtils.js';

export default {
  name: 'ExpressionCanvas',
  props: {
    filter: Object
  },
  data() {
    return {
      canvas: null,
      ctx: null,
      currentX: 0
    };
  },
  mounted() {
    this.canvas = document.getElementById('touchemin__expression-canvas');
    this.canvas.addEventListener('touchmove', e => {
      e.preventDefault();
      const normalisedX = normaliseScreenWidth(
        e.targetTouches[0].pageX - window.innerWidth * 0.1,
        window.innerWidth * 0.9
      );
      const newCutoffFrequency = mapNormalisedToHumanHearing(normalisedX);
      if (newCutoffFrequency < 80) {
        return;
      }
      this.filter.frequency.setValueAtTime(newCutoffFrequency, 0);
    });
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';

#touchemin__expression-canvas {
  min-width: 100%;
  min-height: 15%;
  background: linear-gradient(to right, $darkest-color, $lightest-color);
}
</style>
