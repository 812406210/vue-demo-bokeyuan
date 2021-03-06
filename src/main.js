// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import $ from 'jquery'
import VueResource  from 'vue-resource'
import echarts from "echarts"
import ElementUI from 'element-ui';
import html2canvas from 'html2canvas'
import VueQr from 'vue-qr';
import VueCropper from 'vue-cropper'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/bootstrap/js/bootstrap.min'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(html2canvas)
Vue.use(VueCropper)
Vue.use(VueQr)
Vue.use(VueResource)
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
