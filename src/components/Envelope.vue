<template>
  <div class="envelope-wrapper">
    <div :class="`envelope ${open ? 'open' : ''} ${slide ? 'slide' : ''}`" @click="onButtonClick">
      <div class="envelope-piece">
        <div class="paper back" />
      </div>
      <Frame class="contents" :image="currentBirb" />
      <div class="envelope-piece">
        <div class="wrapper">
          <div class="paper left" />
          <div class="paper right" />
        </div>
      </div>
      <div class="envelope-piece flap">
        <div class="wrapper flap">
          <div class="paper flap" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frame from './Frame.vue';
import currentBirb from '../currentBirb.js';

export default {
  name: 'Envelope',
  props: {
    open: Boolean,
    slide: Boolean,
  },
  components: { Frame },
  data: () => ({ currentBirb }),
  methods: {
    onButtonClick() {
      this.$emit('open');
    },
  },
};
</script>

<style lang="scss" scoped>
.envelope-wrapper {
  $color: #4682b4;
  max-width: 100vmin;
  width: 800px;

  .envelope {
    height: 0;
    padding-top: 66.7%;
    perspective: 1000px;
    position: relative;
    width: 100%;

    &:not(.open) {
      cursor: pointer;
    }

    &.open {
      .wrapper.flap {
        transform: rotateX(180deg);
      }

      .paper.flap {
        background: darken($color, 5);
        box-shadow: 0 0 20px rgba(black, 0);
      }
    }

    &.slide {
      .envelope-piece {
        transform: translateY(200vh);

        &.flap {
          z-index: -1;
        }
      }
    }
  }

  .contents {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    max-height: 80%;
    max-width: 80%;
  }

  .envelope-piece,
  .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .envelope-piece {
    transition: transform 1s;
    transition-timing-function: ease-in;
  }

  .wrapper {
    overflow: hidden;

    &.flap {
      transition: transform 1s;
      transform-origin: center 0.5px;
    }
  }

  .paper {
    background: $color;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;

    &.back {
      background: darken($color, 5);
    }

    &.left {
      transform: rotate(33deg);
      transform-origin: top left;
    }

    &.right {
      transform: rotate(-33deg);
      transform-origin: top right;
    }

    &.flap {
      background: lighten($color, 2);
      box-shadow: 0 0 20px rgba(black, 0.4);
      height: 0;
      padding-top: 100%;
      transition-property: background, box-shadow;
      transition-duration: 0.2s;
      transition-delay: 0.3s;
      transform: scaleY(0.649) translateY(-97.5%) rotate(45deg);
    }
  }
}
</style>
