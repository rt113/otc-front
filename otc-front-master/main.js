// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '../src/store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'


Vue.prototype.$axios=axios  //挂载axios
axios.defaults.baseURL ="http://localhost:8080/user"
Vue.config.productionTip = false
Vue.use(ElementUI);

require('./mock.js')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
