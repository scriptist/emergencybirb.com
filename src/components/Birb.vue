<template>
  <img class="birb" :src="src" @click="onClick" v-if="image" />
  <video class="birb" autoplay loop :src="src" @click="onClick" v-else />
</template>

<script>
export default {
  name: 'Birb',
  props: {
    src: String,
  },
  computed: {
    image() {
      return this.src.match(/(gif)|(jpg)|(png)$/);
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
.birb {
}
</style>
