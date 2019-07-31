<template>
	<div class="xm-city">
		<div class="city-header">
			<xm-header>
				<template #center>
					城市选择
				</template>
			</xm-header>
			<div class="search">
				<input type="text" placeholder="输入城市名或拼音">
			</div>
		</div>
		<xm-list :cities="cities" :hotCities="hotCities"></xm-list>
		<xm-alphabet :cities="cities"></xm-alphabet>
	</div>
</template>

<script>
import Header from '@/share/Header'
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
		this.axios.get('/api/city')
		.then(res =>{
			res = res.data.data
			this.cities = res.cities
			this.hotCities = res.hotCities
		})
	},
	components: {
		xmHeader: Header,
		xmList: List,
		xmAlphabet: Alphabet
	}
}
</script>

<style lang="less" scoped>
	@rem: 375/16rem;
	.xm-city{
		&>.city-header{
			background: #00bcd4;
			&>.search{
				height: 36/@rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
				input{
					width: 365/@rem;
					height: 31/@rem;
					background: #ffffff;
					box-sizing: border-box;
					padding: 0 5/@rem;
					margin: 0 auto;
					border-radius: 3/@rem;
					text-align: center;
				}
			}
		}

	}
</style>
