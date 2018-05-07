<template>
  <div class="touchemin__settings-icon-container">
    <div @click="openSettingsModal">
      <SettingsSVG @click="openSettingsModal"/>
    </div>
    <ToucheminModal v-if="showModal" @closeModal="closeSettingsModal">
      <h1 slot="title" v-text="'Settings'" />
      <div slot="body">
        wow
      </div>
    </ToucheminModal>
  </div>
</template>

<script>
import SettingsSVG from '../assets/svgIcons/settingsSVG.vue';
import ToucheminModal from './ToucheminModal.vue';
export default {
  name: 'SettingsButton',
  components: {
    SettingsSVG,
    ToucheminModal,
  },
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    openSettingsModal() {
      console.log('hello')
      this.showModal = true;
    },
    closeSettingsModal() {
      this.showModal = false;
    },
  },
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
