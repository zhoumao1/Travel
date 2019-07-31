<template>
	<div class="xm-header g-pd">
		<router-link to="/" tag="div" class="prev"></router-link>
		<div class="center">
			<slot name="center"></slot>
		</div>
		<router-link to="/city" class="rights" tag="div">
			<slot name="right"></slot>
			<slot name="icon"></slot>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'Header'
}
</script>

<style lang="less" scoped>
@rem: 375/16rem;
.xm-header {
	height: 43 / @rem;
	background: #00bcd4;
	display: flex;
	box-sizing: border-box;
	padding: 7 / @rem 0;
	.prev {
		flex: 1.5;
		position: relative;
		&:before {
			content: '';
			position: absolute;
			left: 18 / @rem;
			top: 8 / @rem;
			width: 10 / @rem;
			height: 10 / @rem;
			border: #fff solid;
			border-width: 3 / @rem 0 0 3 / @rem;
			transform: rotate(-45deg);
		}
	}
	.center {
		flex: 6.5;
		text-align: center;
		position: relative;
		color: #fff;
		line-height: 33/@rem;
		input {
			position: relative;
			top: -3/@rem;
			width: 100%;
			height: 30/@rem;
			box-sizing: border-box;
			padding-left: 10 / @rem;
			border-radius: 4 / @rem;
		}
	}
	.rights {
		flex: 2;
		color: #fff;
		text-align: center;
		font-size: 14px;
		line-height: 30 / @rem;
		position: relative;
	}
}
</style>
