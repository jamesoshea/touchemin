<template>
  <div>
    <div class="touchemin__modal-overlay" @click="$emit('closeModal')" />
    <div class="touchemin__modal">
      <slot name="title" />
      <slot name="body" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToucheminModal',
}
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
  background-color: #FFF;
  z-index: 2;
}
</style>
