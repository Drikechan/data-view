<template>
  <div class="average-container">
    <div class="average-top">
      <div class="average-top__left">
        <div class="average-top__title">慕课外卖用户年龄分布&平均年龄</div>
        <div class="average-top__subtitle">Distribution of Age</div>
      </div>
      <div class="average-top__right">
        <count-to :startVal='startAgeVal' :endVal='endVal' :duration='2000' :decimals="decimals"></count-to>
        <span class="age-text">岁</span>
      </div>
    </div>
    <div id="average-chart" class="average-middle">
      <vue-echarts :options="options"></vue-echarts>
    </div>
    <div class="average-bottom"></div>
  </div>
</template>
<script>
import {ref, watch} from "vue";
import VueEcharts from '../VueEcharts/index';

export default {
  name: 'AverageAge',
  components: {
    VueEcharts
  },
  props: {
    endVal: {
      type: Number
    },
    duration: {
      type: Number,
      default: 2000
    },
    decimals: {
      type: Number,
      default: 2
    }
  },
  setup(ctx) {
    const startAgeVal = ref(0);
    watch( () => ctx.endVal, (nextVal, preVal) => {
      startAgeVal.value = preVal;
    })
    const options = ref({});
    return {
      startAgeVal,
      options
    }
  }
}
</script>
<style scoped lang="scss">
.average-container {
  width: 100%;
  height: 100%;
  background: #2b2c2e;
  padding: 20px 40px;
  box-sizing: border-box;
}
.average-top {
  display: flex;
  align-items: center;
  .average-top__left {
    .average-top__title {
      font-size: 32px;
    }
    .average-top__subtitle {
      font-size: 16px;
      margin-top: 10px;
    }
  }
  .average-top__right {
    flex: 1;
    margin-left: 40px;
    font-weight: bold;
    font-family: DIN;
    font-size: 68px;
    & .age-text {
      font-size: 20px;
    }
  }
}
</style>