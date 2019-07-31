<template>
	<div class="xm-banner">
		<div class="banner" @click="isShowGallary = !isShowGallary">
			<img
				src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
				alt=""
			/>
			<div class="banner-info">
				<span class="sight-name">{{ sightName }}</span>
				<span class="num">39</span>
			</div>
		</div>
		<xm-gallary @sendIsShowGallary="isShowGallary = $event" v-show="isShowGallary" :gallaryImgs="gallaryImgs"></xm-gallary>
	</div>
</template>

<script>
import Gallary from '@/share/gallary/Gallary'

export default {
	name: 'Banner',
	props: ['gallaryImgs', 'sightName'],
	data() {
		return {
			isShowGallary: false
		}
	},

	components: {
		xmGallary: Gallary
	}
}
</script>

<style lang="less" scoped>
@rem: 375/16rem;
.xm-banner {
	height: 206 / @rem;
	position: relative;
	.banner {
		img {
			width: 100%;
			height: 100%;
		}
		.banner-info {
			display: flex;
			width: 15rem;
			position: absolute;
			bottom: 0;
			padding-bottom: 6 / @rem;
			padding-left: 10 / @rem;
			font-size: 18px;
			color: #ffffff;
			background-image: linear-gradient(
				top,
				rgba(0, 0, 0, 0),
				rgba(0, 0, 0, 0.8)
			);
			.sight-name {
				flex: 8;
			}
			.num {
				flex: 2;
				/*text-align: right;*/
			}
		}
	}
}
</style>
