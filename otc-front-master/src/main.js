// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/global.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import './assets/fonts/iconfont.css'
import './mock/mock'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(axios)
// 配置请求的根路径
axios.defaults.baseURL='http://localhost:8888/'

// axios.interceptors.request.use(config => {
//   NProgress.start()
//   // 登录授权 请求验证是否有token  需要授权的 API ，必须在请求头中使用 `Authorization` 字段提供 `token` 令牌
//   config.headers.Authorization = window.sessionStorage.getItem('token')
//   return config // 必须返回否则没有值
// })
Vue.prototype.$http=axios

/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
