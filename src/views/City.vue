<template>
	<div class="xm-city">
		<xm-search :cities="cities"></xm-search>
		<xm-list :cities="cities" :hotCities="hotCities"></xm-list>
		<xm-alphabet :cities="cities"></xm-alphabet>
	</div>
</template>

<script>
import Search from '@/components/city/Search'

import List from '@/components/city/List'
import Alphabet from '@/components/city/Alphabet'

export default {
	name: 'City',
	data() {
		return {
			cities: {},
			hotCities: []
		}
	},
	created() {
		this.axios.get('/api/city').then(res => {
			res = res.data.data
			this.cities = res.cities
			this.hotCities = res.hotCities
		})
	},

	components: {
		xmSearch: Search,
		xmList: List,
		xmAlphabet: Alphabet
	}
}
</script>

<style lang="less" scoped>
@rem: 375/16rem;
.xm-city {
}
</style>
