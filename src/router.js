import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Detail from '@/views/Detail'
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
			name: 'detail',
			path: '/detail/:id',
			component: Detail
		},
		{
			name: 'city',
			path: '/city',
			component: City
		}
	],
	mode: 'hash'
})
