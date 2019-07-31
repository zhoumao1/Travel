<template>
	<div class="xm-icons">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<div class="item" v-for="(icon, index) in iconList" :key="index">
						<img :src="icon.imgUrl" alt="">
						<p>{{ icon.desc }}</p>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="item">
						<img :src="iconList2.imgUrl" alt="">
						<p>{{ iconList2.desc }}</p>
					</div>
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
	props: ['iconList', 'iconList2'],
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
			flex-wrap: wrap;
			.item {
				justify-content: center;
				align-items: center;
				width: 25%;
				height: 85 / @rem;
				box-sizing: border-box;
				padding-top: 5 / @rem;
				text-align: center;
				img{
					width: 55/@rem;
					height: 55/@rem;
				}
				p{
					margin-top: 5/@rem;
					font-size: 14px;
					color: #212121;
				}
			}
			.row {
				/*flex: 1;*/
			}
		}
	}
}
</style>
