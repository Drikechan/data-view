<template>
  <div class="michael-loading">
    <svg :width="width" :height="height" viewBox="0 0 50 50">
      <!-- 2pi*r/4 -->
      <circle r="22" cx="25" cy="25" fill="none" stroke-width="3" :stroke="outsideColor" stroke-dasharray="34"
        stroke-linecap="round">
        <!--from 、to也可以用values替代 -->
        <animateTransform attributeName="transform" type="rotate" values="0 25 25;360 25 25"
          :dur="`${duration}s`" repeatCount="indefinite"></animateTransform>
        <animate attributeName="stroke" :values="outsideColorAnimation" :dur="`${duration}s`" repeatCount="indefinite"></animate>
      </circle>
      <circle r="12" cx="25" cy="25" fill="none" stroke-width="3" :stroke="insideColor" stroke-dasharray="19"
        stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate" from="360 25 25" to="0 25 25"
                          :dur="`${duration}s`" repeatCount="indefinite"></animateTransform>
        <animate attributeName="stroke" :values="insideColorAnimation" :dur="`${duration}s`" repeatCount="indefinite"></animate>
      </circle>
    </svg>
    <div class="michael-loading-content">
      <slot></slot>
    </div>
  </div>

</template>
<script>
import { computed } from "vue";

export default {
  name: 'MichaelLoading',
  props: {
    width: {
      type: String,
      default: '100'
    },
    height: {
      type: String,
      default: '100'
    },
    outsideColor: {
      type: String,
      default: '#3be6cd'
    },
    insideColor: {
      type: String,
      default: '#02bcfe'
    },
    duration: {
      type: Number,
      default: 2
    }
  },
  setup(context) {
    const outsideColorAnimation = computed(() => `${context.outsideColor};${context.insideColor};${context.outsideColor}`);
    const insideColorAnimation = computed(() => `;${context.insideColor}${context.outsideColor};${context.insideColor}`);
    return {
      outsideColorAnimation,
      insideColorAnimation
    }
  }

}
</script>
<style scoped lang="scss">
.michael-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  & svg {
    margin: 0 auto;

  }
}
</style>