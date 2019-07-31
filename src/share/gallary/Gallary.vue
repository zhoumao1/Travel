<template>
	<div class="xm-gallary" @click="isShowGallary">
		<div class="wrap">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div
						class="swiper-slide"
						v-for="slide in gallaryImgs"
						:key="slide"
						:style="{ backgroundImage: `url(${slide})` }"
					></div>
				<div class="swiper-pagination"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Swiper from 'swiper'

export default {
	name: 'Gallary',
	props: ['gallaryImgs'],
	mounted() {
		setTimeout(() => {
			new Swiper('.xm-gallary .wrap .swiper-container', {
				pagination: {
					el: '.xm-gallary .wrap .swiper-container .swiper-pagination',
					type: 'fraction'
				}
			})
		}, 1000)
	},
	methods: {
		isShowGallary(){
			this.$emit('sendIsShowGallary', false)
		}
	}
}
</script>

<style lang="less" scoped>
@rem: 375/16rem;
.xm-gallary {
	z-index: 112;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	background: #000;
	.wrap {
		background: #fff;
		.swiper-container {
			height: 206 / @rem;
			.swiper-slide {
				background-size: cover;
				background-position: center center;
			}
			.swiper-pagination {
				/*position: fixed;*/
				color: #fff;
			}
		}
	}
}
</style>
