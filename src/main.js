import { createApp } from 'vue';
import App from './App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.min.css';
import ECharts from "vue-echarts/dist/index.esm";
import dataV from '@jiaminghi/data-view';


const wmsApp = createApp(App);



wmsApp.config.performance = true;


wmsApp.use(Antd).use(dataV).component('vue-echarts', ECharts).mount('#app');