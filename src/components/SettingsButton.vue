<template>
  <div class="touchemin__settings-icon-container">
    <SettingsSVG/>
  </div>
</template>

<script>
import SettingsSVG from '../assets/svgIcons/settingsSVG.vue';
export default {
  components: {
    SettingsSVG,
  },
  methods: {
    openSettingsModal() {},
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
