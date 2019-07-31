<template>
	<div class="xm-banner-swiper">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div
					class="swiper-slide"
					v-for="slide in swiperList"
					:key="slide.id"
					:style="{ backgroundImage: `url(${slide.imgUrl})` }"
				></div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>
		</div>
	</div>
</template>

<script>
import Swiper from 'swiper'

export default {
	name: 'BannerSwiper',
	props: ['swiperList'],
	created() {},
	mounted() {
		setTimeout(() => {
			new Swiper('.xm-banner-swiper .swiper-container', {
				loop: true,
				autoplay: true
			})
		}, 1000)
	}
}
</script>

<style lang="less" scoped>
@rem: 375 / 16rem;
.xm-banner-swiper {
	.swiper-container {
		width: 16rem;
		height: 110 / @rem;
		.swiper-slide {
			width: 16rem;
			height: 100%;
			background-size: cover;
		}
	}
}
</style>
