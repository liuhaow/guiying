// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import store from './vuex/store'
import MintUI from 'mint-ui'
import axios from 'axios'
import 'mint-ui/lib/style.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import '@/common/font/reset.css'
import '@/common/font/iconfont.css'
import '@/common/font/iconfont.js'

Vue.use(MintUI)
Vue.use(Vant)
Vue.prototype.$ajax = axios
Vue.config.productionTip = false
//router.beforeEach((to, from, next) => {
//	// NProgress.start();
//	if(to.path == '/need/login') {
//		localStorage.removeItem('userData');
//		localStorage.removeItem('tokenId');	
//	}
//	let tokenId = JSON.parse(localStorage.getItem('tokenId'));
//	if(!tokenId && to.path != '/need/login') {
//		next({
//			path: '/need/login'
//		})
//	} else {
//		next()
//	} //默认可选择暂时不登录
//	next()
//})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
