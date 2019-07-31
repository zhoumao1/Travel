<template>
	<div class="xm-header g-pd">
		<div class="prev"></div>
		<div class="center">
			<slot name="center"></slot>
		</div>
		<div class="right">
			<slot name="right"></slot>
		</div>
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
		input {
			width: 100%;
			height: 30/@rem;
			box-sizing: border-box;
			padding-left: 10 / @rem;
			border-radius: 4 / @rem;
		}
	}
	.right {
		flex: 2;
		color: #fff;
		text-align: center;
		font-size: 14px;
		line-height: 30 / @rem;
	}
}
</style>
