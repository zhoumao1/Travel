<template>
	<div class="xm-Detail">
		<xm-header></xm-header>
		<xm-banner :gallaryImgs="gallaryImgs"></xm-banner>
		<div class="content" style="height: 1000px;"></div>
	</div>
</template>

<script>
import Banner from '@/components/detail/Banner'
import Header from '@/components/detail/Header'

export default {
	name: 'Detail',
	data() {
		return {
			gallaryImgs: []
		}
	},
	created() {
		this.axios.get('/api/detail').then(res => {
			let data = res.data.data

			this.gallaryImgs = data.gallaryImgs
		})
	},
	components: {
		xmBanner: Banner,
		xmHeader: Header
	}
}
</script>

<style lang="less" scoped>
@rem: 375/16rem;
</style>
