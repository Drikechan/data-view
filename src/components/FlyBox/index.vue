<template>
  <div class="fly-box-container">
    <svg :width="width" :height="height" :ref="refName">
      <defs>
        <path :id="pathId" :d="path" fill="transparent"></path>
        <radialGradient :id="radialGradientId" cx="50%" cy="50%" fx="100%" fy="50%" r="50%">
          <stop offset="0%" stop-color="#fff" stop-opacity="1"></stop>
          <stop offset="100%" stop-color="#fff" stop-opacity="0"></stop>
        </radialGradient>
        <mask :id="maskId">
          <circle :r="starLength" cx="0" cy="0"  :fill="`url(#${radialGradientId})`">
            <animateMotion :dur="`${duration}s`" :path="path" rotate="auto" repeatCount="indefinite"></animateMotion>
          </circle>
        </mask>
      </defs>
      <use :href="`#${pathId}`" stroke-width="1" :stroke="lineColor"></use>
      <use :href="`#${pathId}`" stroke-width="3" :stroke="starColor" :mask="`url(#${maskId})`"></use>
    </svg>
    <div class="fly-box-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import {ref, onMounted, getCurrentInstance, computed} from 'vue';
import { v4 as uuidv4 } from 'uuid';
export default {
  name: 'fly-box',
  props: {
    refName: {
      type: String,
      default: ''
    },
    lineColor: {
      type: String,
      default: '#235fa7'
    },
    starColor: {
      type: String,
      default: '#4fd2dd'
    },
    starLength: {
      type: String,
      default: '50'
    },
    duration: {
      type: Number,
      default: 3
    }
  },
  setup(ctx) {
    const uuid = uuidv4();
    const width = ref(0);
    const height = ref(0);
    const init = () => {
      const instance = getCurrentInstance();
      const dom = instance.ctx.$refs[ctx.refName];
      width.value = dom.clientWidth;
      height.value = dom.clientHeight;
    }
    const pathId = `${ctx.refName}-path-${uuid}`;
    const radialGradientId = `${ctx.refName}-gradient-${uuid}`;
    const maskId = `${ctx.refName}-mask-${uuid}`;

    const path = computed(() => `M5 5 L${width.value - 5} 5 L${width.value - 5} ${height.value - 5} L5 ${height.value - 5} Z`);
    console.log(path)
    onMounted(() => {
      init()
    })
    return {
      width,
      height,
      path,
      pathId,
      radialGradientId,
      maskId
    }
  }
}
</script>
<style scoped lang="scss">
.fly-box-container {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #333;
}

svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.fly-box-content {
  width: 100%;
  height: 100%;
  padding: 5px;
  box-sizing: border-box;
}
</style>