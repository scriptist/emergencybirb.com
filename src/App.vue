<template>
  <div id="app">
    <h1 class="title">Emergency Birb</h1>
    <p class="subtitle">Open envelope in case of emergency</p>
    <Envelope :open="open" :slide="slide" @open="onOpen" />
  </div>
</template>

<script>
import Envelope from './components/Envelope.vue';

export default {
  name: 'App',
  components: { Envelope },
  data: () => ({ open: false, slide: false }),
  methods: {
    onOpen() {
      if (this.open) {
        // this.open = this.slide = false;
        return;
      }

      this.open = true;
      setTimeout(() => (this.slide = true), 1000);
    },
  },
};
</script>

<style lang="scss">
// Reset
* {
  box-sizing: border-box;
}

html {
  background: lighten(pink, 5);
  font-family: sans-serif;
}

body {
  margin: 0;
}

img {
  max-height: 100%;
  max-width: 100%;
}

input,
textarea,
select,
button {
  font: inherit;
}
</style>

<style lang="scss" scoped>
#app {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
}

.title {
  color: darken(pink, 5);
  margin-bottom: 0;
}

.subtitle {
  color: darken(pink, 5);
  margin: 5px 0 40px;
  font-size: 12px;
}
</style>
