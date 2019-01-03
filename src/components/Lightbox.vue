<template>
  <div :class="`lightbox ${visible ? 'visible' : ''}`" @click="onClick">
    <img class="image" :src="image" />
  </div>
</template>

<script>
export default {
  name: 'Lightbox',
  props: {
    image: String,
    visible: Boolean,
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
.lightbox {
  align-items: center;
  background: rgba(black, 0.8);
  bottom: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.3s;

  &:not(.visible) {
    opacity: 0;
    pointer-events: none;
  }

  .image {
    max-height: 95%;
    max-width: 95%;
  }
}
</style>
