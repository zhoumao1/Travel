import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import City from '@/views/City'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			name: 'city',
			path: '/city',
			component: City
		}
	],
	mode: 'history'
})
