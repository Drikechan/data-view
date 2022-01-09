<template>
  <div class="container">
    <Loading v-if="false">Loading...</Loading>
    <Container :options="{width: 3840, height: 2160}">
      <div class="header">
        <top-header></top-header>
      </div>
      <div class="separator-wrapper">
        <separator></separator>
      </div>
      <div class="center">
        <div class="left">
          <div class="left1">

          </div>
          <div class="left2">2</div>
          <div class="left3">
<!--            <vue-echarts :option="dataOptions"></vue-echarts>-->
          </div>
        </div>
        <div class="right">1</div>

      </div>
    </Container>
  </div>
</template>
<script>
import Loading from '../../components/Loading/index.vue';
import Container from '../../components/Container/index';
import TopHeader from '../../components/TopHeader2/index';
import Separator from '../../components/Separator/index';

export default {
  name: 'Screen',
  components: {
    Loading,
    Container,
    TopHeader,
    Separator
  },
  setup() {

    return {
      dataOptions: {
        xAxis: {
          data: ['a', 'b', 'c', 'd']
        },
        yAxis: {},
        series: [{
          name: 'sales',
          type: 'bar',
          data: [10, 20, 30, 40, 50]
        }]
      }
    }
  }
}

</script>
<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  background: rgb(29, 29, 29);
  color: #fff;
  font-size: 48px;
  .michael-container {
    display: flex;
    flex-direction: column;
    .header {
      height: 167px;
      margin-top: 10px;
    }

    .separator-wrapper {
      height: 10px;
    }

    .center {
      flex: 1;
      display: flex;
      .left {
        flex: 0 0 860px;
        display: flex;
        flex-direction: column;
        width: 860px;
        height: 100%;
        margin: 0 10px;
        box-sizing: border-box;
        background: rgb(60, 61, 64);
        .left1, .left2, .left3, .left4, .left5, .left6 {
          padding-bottom: 20px;
        }

        .left1 {
          height: 300px;
        }

        .left2 {
          height: 320px;
        }

        .left3 {
          height: 280px;
        }

        .left4 {
          height: 230px;
        }

        .left5 {
          height: 360px;
        }

        .left6 {
          height: 360px;
        }
      }
    }
  }
}
</style>