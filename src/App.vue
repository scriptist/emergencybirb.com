<template>
  <div id="app">
    Hello!
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
// Reset
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

img {
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
  display: flex;
  height: 100vh;
  justify-content: center;
}
</style>
