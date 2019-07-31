<template>
	<div class="xm-banner-swiper">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">Slide 1</div>
				<div class="swiper-slide">Slide 2</div>
				<div class="swiper-slide">Slide 3</div>
				<div class="swiper-slide">Slide 4</div>
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
	mounted () {
		new Swiper('.xm-banner-swiper .swiper-container', {
			loop: true
		})
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
			background: #49c;
		}
	}
}
</style>
