<template>
  <div class="total-user">
    <div class="title">用户总数</div>
    <div class="sub-title">User Total Count</div>
    <div class="total">
      <count-to :startVal='startVal' :endVal='totalUser' :duration='5000'></count-to>
    </div>
    <div class="percent-text">
        <span class="percent-text__top">
          每日增长率:
          <count-to :startVal='startPercentDay' :endVal='growthLastDay' :duration='1000' :suffix="'%'"></count-to>
        </span>
        <span class="percent-text__bottom">
          每月增长率:
          <count-to :startVal='startPercentMonth' :endVal='growthLastMonth' :duration='1000' :suffix="'%'"></count-to>
        </span>
    </div>
    <div class="percent">
      <div class="percent-inner">
        <div class="percent-inner__content" :style="{width: `${growthLastMonth}%`}"></div>
      </div>
    </div>
  </div>
</template>
<script>
import {ref, watch} from "vue";

export default {
  name: 'TotalUser',
  props: {
    totalUser: {
      type: Number,
      default: 0
    },
    growthLastDay: {
      type: Number,
      default: 0
    },
    growthLastMonth: {
      type: Number,
      default: 0
    }
  },
  setup(ctx) {
    const startVal = ref(0);
    const startPercentDay = ref(0);
    const startPercentMonth = ref(0);
    watch(() => ctx.totalUser, (nextVal, prevVal) => {
      startVal.value = prevVal;
    })
    watch(() => ctx.growthLastDay, (nextVal, prevVal) => {
      startPercentDay.value = prevVal;
    })
    watch(() => ctx.growthLastMonth, (nextVal, prevVal) => {
      startPercentMonth.value = prevVal;
    })
    return {
      startVal,
      startPercentDay,
      startPercentMonth
    }

  }
}
</script>
<style scoped lang="scss">
.total-user {
  width: 100%;
  height: 100%;
  background: rgb(66, 68, 70);
  box-shadow: 0 10px 10px rgba(0, 0, 0, .3);
  padding: 20px 40px;
  box-sizing: border-box;

  .title {
    font-size: 32px;
  }

  .sub-title {
    font-size: 16px;
    letter-spacing: 1px;
    margin-top: 10px;
  }
  .total {
    font-family: DIN;
    font-size: 68px;
    font-weight: bolder;
    letter-spacing: 2px;
    padding: 10px 0;
  }

  .percent-text {
    font-size: 28px;
    font-family: DIN;
    letter-spacing: 2px;

    .percent-text__top {
      color: rgb(197, 251, 121);
    }

    .percent-text__bottom {
      color: rgb(99, 169, 0);
      margin-left: 10px;
    }
  }
  .percent {
    width: 100%;
    height: 20px;
    box-sizing: border-box;
    border: 1px solid #fff;
    margin-top: 10px;
    .percent-inner {
      height: 100%;
      padding: 2px;
      overflow: hidden;
      box-sizing: border-box;
      .percent-inner__content {
        height: 100%;
        background: #969696;
        -webkit-transition: all 1s linear;
        transition: all 1s linear;
      }
    }
  }
}
</style>