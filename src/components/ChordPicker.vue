<template>
  <div class="touchemin__note-picker">
    <div v-for="note in notes" :key="note.id" class="touchemin__note-container">
      <img class="touchemin__note-circle" src="../../public/img/note-circle.png">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notes: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }],
    };
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
