<template>
  <div class="touchemin__note-picker">
    <div
      v-for="(chord, index) in chords"
      :key="index"
      class="touchemin__note-container"
      @click="selectChord(chord)"
    >
      <img class="touchemin__note-circle" src="../../public/img/note-circle.png" @click="selectChord(chord)">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      chords: 'chords/chordsInKey',
    }),
  },
  methods: {
    selectChord(chord) {
      this.$store.dispatch('chords/selectChord', chord);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';
.touchemin__note-picker {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: linear-gradient(to top, $darkest-color 15%, $lightest-color);
}

.touchemin__note-circle {
  width: 20px;
}
</style>
