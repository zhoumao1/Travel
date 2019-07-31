import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

import './assets/css/base.css'
import '@/assets/js/adjust'
import 'swiper/dist/css/swiper.min.css'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
axios.defaults.baseURL = ' https://easy-mock.com/mock/5ceca2b5b2cb1836a8f1ae87/test'

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
