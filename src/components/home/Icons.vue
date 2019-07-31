<template>
	<div class="xm-icons">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<div class="row"></div>
				</div>
				<div class="swiper-slide">
					<div class="row"></div>
				</div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>
		</div>
	</div>
</template>

<script>
import Swiper from 'swiper'

export default {
	name: 'Icons',
	created() {
		this.axios.get('')
	},
	mounted() {
		new Swiper('.xm-icons .swiper-container', {})
	}
}
</script>

<style lang="less" scoped>
@rem: 375/16rem;
.xm-icons {
	height: 185 / @rem;
	box-sizing: border-box;
	padding-top: 5 / @rem;
	.swiper-container {
		.swiper-slide {
			display: flex;
			justify-content: center;
			align-items: center;
			.row{
				flex: 1;
			}
		}
	}
}
</style>
