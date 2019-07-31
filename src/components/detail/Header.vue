<template>
	<div class="detail-header">
		<div class="header" v-show="isShowHeader">
			<router-link to="/" tag="div" class="back"></router-link>
		</div>
		<div class="de-header" v-show="!isShowHeader" :style="opacityStyle">
			<xm-header>
				<template #center>
					北京
				</template>
			</xm-header>
		</div>
	</div>
</template>

<script>
import Header from '@/share/Header'

export default {
	name: 'Header',
	data() {
		return {
			isShowHeader: true,
			opacityStyle: {
				opacity: 0
			}
		}
	},
	methods: {
		handleScroll() {
			console.log(111)
			const top = document.documentElement.scrollTop

			if (top > 60) {
				let opacity = top / 140

				opacity = opacity > 1 ? 1 : opacity
				this.opacityStyle = { opacity }
				this.isShowHeader = false
			} else {
				this.isShowHeader = true
			}
		}
	},
	activated() {
		window.addEventListener('scroll', this.handleScroll)
	},
	deactivated() {
		window.removeEventListener('scroll', this.handleScroll)
	},
	components: {
		xmHeader: Header
	}
}
</script>

<style lang="less" scoped>
@rem: 375/16rem;
.detail-header {
	.header {
		width: 16rem;
		z-index: 100;
		position: fixed;
		top: 6 / @rem;
		left: 10 / @rem;
		color: #fff;
		.back {
			position: relative;
			width: 35 / @rem;
			height: 35 / @rem;
			border-radius: 50%;
			background: rgba(0, 0, 0, 0.7);
			&:before {
				content: '';
				position: absolute;
				left: 14 / @rem;
				top: 10 / @rem;
				width: 10 / @rem;
				height: 10 / @rem;
				border: #fff solid;
				border-width: 3 / @rem 0 0 3 / @rem;
				transform: rotate(-45deg);
			}
		}
	}
	.de-header {
		width: 16rem;
		position: fixed;
		z-index: 111;
	}
}
</style>
