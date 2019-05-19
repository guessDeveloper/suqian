// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Select ,Radio, DatePicker,Message} from 'element-ui';
import qs from 'qs'
import axios from "axios";
import $ from 'jquery';
const host = process.env.BASEURL;
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
Vue.config.productionTip = false
Vue.use(Radio);
Vue.use( DatePicker);
Vue.prototype.$message = Message;
Vue.prototype.$host = host;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
