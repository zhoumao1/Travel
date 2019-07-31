<template>
	<div class="xm-Detail">
		<xm-header></xm-header>
		<xm-banner :gallaryImgs="gallaryImgs" :sightName="sightName"></xm-banner>
		<xm-list :categoryList="categoryList"></xm-list>
	</div>
</template>

<script>
import Banner from '@/components/detail/Banner'
import Header from '@/components/detail/Header'
import List from '@/components/detail/List'

export default {
	name: 'Detail',
	data() {
		return {
			gallaryImgs: [],
			sightName: '',
			categoryList: []
		}
	},
	created() {
		this.axios.get('/api/detail').then(res => {
			let data = res.data.data

			this.gallaryImgs = data.gallaryImgs
			this.sightName = data.sightName
			this.categoryList = data.categoryList
			console.log(data)
		})
	},
	components: {
		xmBanner: Banner,
		xmHeader: Header,
		xmList: List
	}
}
</script>

<style lang="less" scoped>
@rem: 375/16rem;
</style>
