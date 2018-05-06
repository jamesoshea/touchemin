<template>
  <div class="touchemin__note-picker">
    <div
      v-for="(chord, index) in chords"
      :key="index"
      class="touchemin__note-container"
      @click="selectChord(chord)"
    >
      <img class="touchemin__note-circle" src="../../public/img/note-circle.png">
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
.touchemin__note-picker {
  position: absolute;
  top: 0;
  left: 0;
  width: 5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.25%;
}

.touchemin__note-container {
  flex-grow: 1;
  margin: auto;
}

.touchemin__note-circle {
  position: relative;
  transform: translateY(75%);
  width: 50%;
}
</style>
