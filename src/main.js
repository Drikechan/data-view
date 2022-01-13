import { createApp } from 'vue';
import App from './App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.min.css';
import dataV from '@jiaminghi/data-view';
import VueCountTo from './components/VueCountTo/vue-countTo';


const wmsApp = createApp(App);



wmsApp.config.performance = true;


wmsApp.use(Antd).component('count-to', VueCountTo).use(dataV).mount('#app');