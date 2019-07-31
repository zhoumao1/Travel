import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		letters: '',
		city: '上海'
	},
	getters: {
		letters: state => {
			return state.letters
		},
		city: state => {
			console.log(localStorage)
			if (localStorage.city) {
				state.city = localStorage.city
			}
			return state.city
		}
	},
	mutations: {
		setLetters: (state, zimu) => {
			state.letters = zimu
		},
		setCity: (state, city) => {
			console.log(city)
			state.city = city
			try {
				localStorage.city = city
			} catch (e) {
				console.log(e)
			}
		}
	},
	actions: {}
})
