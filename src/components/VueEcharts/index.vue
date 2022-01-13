<template>
  <div class="echarts"></div>
</template>
<script>
/* eslint-disable */
import { onMounted, watch } from "vue";
import * as Echarts from 'echarts';
export default {
  name: 'VueEcharts',
  props: {
    options: {
      type: Object
    }
  },
  setup(ctx) {
    let dom, chart;
    const initChart = () => {
      if (!chart) {
        dom = document.querySelector('.echarts');
        chart = Echarts.init(dom);
      }
      chart.setOption(ctx.options);
    }
    onMounted(() => {
      initChart();
    })
    watch(() => ctx.options, () => {
        initChart();
    })

  }
}
</script>
<style scoped lang="scss">
.echarts {
  width: 100%;
  height: 100%;
}
</style>