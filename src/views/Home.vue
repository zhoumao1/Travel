<template>
	<div class="xm-home">
		<xm-header>
			<template #center>
				<input type="text" placeholder="请输入地址" />
			</template>
			<template #right>
				{{ city }}
			</template>
			<template #icon>
				<i class="icon"></i>
			</template>
		</xm-header>
		<xm-banner-swiper :swiperList="swiperList"></xm-banner-swiper>
		<xm-icons :iconList="iconList" :iconList2="iconList2"></xm-icons>
		<xm-recommend :recommendList="recommendList"></xm-recommend>
		<xm-weekend :weekendList="weekendList"></xm-weekend>
	</div>
</template>

<script>
import Header from '@/share/Header'
import BannerSwiper from '@/components/home/BannerSwiper'
import Icons from '@/components/home/Icons'
import Recommend from '@/components/home/Recommend'
import Weekend from '@/components/home/Weekend'

export default {
	name: 'xm-home',
	data() {
		return {
			swiperList: [],
			iconList: [],
			iconList2: [],
			recommendList: [],
			weekendList: []
		}
	},
	created() {
		this.axios.get('/api/index')
			.then(res => {
				let data = res.data.data

				this.swiperList = data.weekendList
				this.iconList = data.iconList.slice(0, 8)
				this.iconList2 = data.iconList.slice(8, 9)[0]
				console.log(this.iconList2)
				this.recommendList = data.recommendList
				this.weekendList = data.weekendList
			})
	},
	computed: {
		city(){
			return this.$store.getters.city
		}
	},
	components: {
		xmHeader: Header,
		xmBannerSwiper: BannerSwiper,
		xmIcons: Icons,
		xmRecommend: Recommend,
		xmWeekend: Weekend
	}
}
</script>

<style lang="less" scoped>
@rem: 375/16rem;
i.icon {
	width: 0;
	height: 0;
	position: absolute;
	top: 10 / @rem;
	right: 7 / @rem;
	border-top: 7 / @rem solid #fff;
	border-left: 7 / @rem solid transparent;
	border-right: 7 / @rem solid transparent;
}
</style>
