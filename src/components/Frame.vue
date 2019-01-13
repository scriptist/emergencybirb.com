<template>
  <Birb class="frame" :src="birb" @click="onClick" />
</template>

<script>
import Birb from './Birb.vue';

export default {
  name: 'Frame',
  props: {
    birb: String,
  },
  components: { Birb },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
.frame {
  background: black;
  border: 20px solid white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(black, 0.2);
}
</style>
