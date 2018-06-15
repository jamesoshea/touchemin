<template>
  <div class="touchemin__settings-icon-container">
    <div @click="openSettingsModal">
      <SettingsSVG @click="openSettingsModal"/>
    </div>
    <ToucheminModal v-if="showModal" @closeModal="closeSettingsModal" />
  </div>
</template>

<script>
import SettingsSVG from '../assets/svgIcons/settingsSVG.vue';
import ToucheminModal from './ToucheminModal.vue';
export default {
  name: 'SettingsButton',
  components: {
    SettingsSVG,
    ToucheminModal
  },
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
    openSettingsModal() {
      this.showModal = true;
    },
    closeSettingsModal() {
      this.showModal = false;
    },
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

<style lang="scss">
.touchemin__settings-icon-container {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 15vh;
  width: 15vh;
}
</style>
