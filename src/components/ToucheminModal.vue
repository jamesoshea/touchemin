<template>
  <div>
    <div class="touchemin__modal-overlay" @click="$emit('closeModal')" />
    <div class="touchemin__modal">
      <h1 slot="title" v-text="'Settings'" />
      <div slot="body">
        <form class="pure-form">
          <select name="key" v-model="selectedKey">
            <option v-for="key in keys()" :key="key" :value="key">{{ key }}</option>
          </select>
          <select name="octave" v-model="selectedOctave">
            <option v-for="octave in octaves()" :key="octave" :value="octave">{{ octave }}</option>
          </select>
          <p v-text="keyRepresentation"/>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToucheminModal',
  data() {
    return {
      showModal: false,
      selectedKey: 'C',
      selectedOctave: 3
    };
  },
  computed: {
    keyRepresentation() {
      return `${this.selectedKey}${this.selectedOctave}`;
    }
  },
  methods: {
    octaves() {
      const result = [];
      for (let i = 0; i < 7; i++) {
        result.push(i);
      }
      return result;
    },
    keys() {
      const result = [];
      for (let i = 65; i < 72; i++) {
        result.push(String.fromCharCode(i));
      }
      return result;
    }
  }
};
</script>

<style>
.touchemin__modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  background-color: #000;
  z-index: 1;
}

.touchemin__modal {
  position: fixed;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
  opacity: 1;
  background-color: #fff;
  z-index: 2;
}
</style>
