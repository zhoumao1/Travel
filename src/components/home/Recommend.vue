<template>
	<div class="xm-recommend">
		<div class="title">
			<span>热销推荐</span>
		</div>
		<div class="content g-pd">
			<div class="row">
				<div class="item" v-for="item in recommendList" :key="item.id">
					<img :src="item.imgUrl" alt="" />
					<p>{{ item.title }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Recommend',
	props: ['recommendList']
}
</script>

<style lang="less" scoped>
@rem: 375/16rem;
.xm-recommend {
	font-size: 14px;
	color: #333333;
	margin-top: 10 / @rem;
	line-height: 40 / @rem;
	box-sizing: border-box;
	.title {
		padding-left: 10/@rem;
		background: #eeeeee;
		height: 40 / @rem;
	}
	.content {
		box-sizing: border-box;
		/*padding-right: 10 / @rem;*/
		overflow-y: auto;
		width: 16rem;
		height: 154 / @rem;
		.row {
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
			white-space: nowrap;
			.item {
				/*float: left;*/
				display: inline-block;
				margin-right: 6 / @rem;
				width: 100 / @rem;
				height: 141 / @rem;
				text-align: center;
				img {
					width: 100%;
					height: 100 / @rem;
				}
				p {
					font-size: 12px;
					margin-top: 10 / @rem;
				}
				&:nth-of-type(5) {
					margin-right: 0;
				}
			}
		}
	}
}
</style>
