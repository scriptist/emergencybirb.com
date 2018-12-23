<template>
  <img class="frame" :src="image" />
</template>

<script>
export default {
  name: 'Frame',
  props: {
    image: String,
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
