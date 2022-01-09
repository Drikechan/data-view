<template>
  <div class="michael-container" :ref="refName">
    <template v-if="ready">
      <slot></slot>
    </template>
  </div>
</template>
<script>
/* eslint-disable */
import { ref, getCurrentInstance, onMounted, onUnmounted, nextTick } from "vue";
import { debounce } from "../../utils";

export default {
  name: 'michael-container',
  props: {
    options: {
      type: Object
    }
  },
  setup(ctx) {

    const refName = 'michaelContainer';
    const width = ref(0);
    const height = ref(0);
    const originalWidth = ref(0);
    const originalHeight = ref(0);
    const ready = ref(false);
    let context, dom, observer;

    const init = () => {
      return new Promise((resolve) => {
        nextTick(() => {
          dom = context.$refs[refName];
          if (ctx.options && ctx.options.width && ctx.options.height) {
            width.value = ctx.options.width;
            height.value = ctx.options.height;
          } else {
            width.value = dom.clientWidth;
            height.value = dom.clientHeight;
          }
          if (!originalWidth.value || !originalHeight.value) {
            originalWidth.value = window.screen.width;
            originalHeight.value = window.screen.height;
          }
          resolve()
        })
      })

    }
    
    const updateSize = () => {
      if (width.value && height.value) {
        dom.style.width = `${width.value}px`;
        dom.style.height = `${height.value}px`;
      } else  {
        dom.style.width = `${originalWidth.value}px`;
        dom.style.height = `${originalHeight.value}px`;
      }
    }

    const updateScale = () => {
      const currentWidth = document.body.clientWidth;
      const currentHeight = document.body.clientHeight;
      //获取大屏最终的宽高
      const realWidth = width.value || originalWidth.value;
      const realHeight = height.value || originalHeight.value;
      const widthScale = currentWidth / realWidth;
      const heightScale = currentHeight / realHeight;
      dom.style.transform = `scale(${widthScale}, ${heightScale})`
    }
    const onResize = async (e) => {
      await init();
      updateScale();
    }
    
    const initMutationObserver = () => {
      const  MutationObserver = window.MutationObserver;
      observer = new MutationObserver(onResize);
      observer.observe(dom, {
        attributes: true,
        attributeFilter: ['style'],
        attributeOldValue: true
      });
    }
    
    const removeMutationObserver = () => {
      if (observer) {
        observer.disconnect();
        observer.takeRecords();
        observer = null;
      }
      
    }

    onMounted(async () => {
      ready.value = false;
      context = getCurrentInstance().ctx;
      await init();
      updateSize();
      updateScale();

      window.addEventListener('resize', debounce(100, onResize));
      initMutationObserver()
      ready.value = true;
    })

    onUnmounted(() => {
      window.removeEventListener('resize', debounce(100, onResize));
      removeMutationObserver()
    })

    return {
      refName,
      ready
    }
  }
}
</script>
<style lang="scss">
.michael-container {
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  transform-origin: left top;
  z-index: 999;
}
</style>