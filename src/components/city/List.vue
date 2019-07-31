<template>
	<div class="xm-list" ref="wrapper">
		<div class="list">
			<div class="title">当前城市</div>
			<div class="current-row clearfix">
				<div class="tag">上海</div>
			</div>
			<div class="title">热门城市</div>
			<div class="list-group clearfix">
				<div class="tag" v-for="item of hotCities" :key="item.id">
					{{ item.name }}
				</div>
			</div>
			<div class="list-group" v-for="(item, key) of cities" :key="key">
				<div class="title">{{ key }}</div>
				<div class="item" v-for="innerItem of item" :key="innerItem.id">
					{{ innerItem.name }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
	name: 'List',
	props: ['cities', 'hotCities'],
	mounted() {
		console.log(this.cities)
		this.scroll = new BScroll(this.$refs.wrapper)
	}
}
</script>

<style lang="less" scoped>
@rem: 375/16rem;
.xm-list {
	overflow: hidden;
	position: absolute;
	top: 79 / @rem;
	left: 0;
	right: 0;
	bottom: 0;
	& > .list {
		& > .title,
		& > .list-group .title {
			width: 16rem;
			height: 26 / @rem;
			line-height: 26 / @rem;
			font-size: 13px;
			color: #666666;
			background: #eee;
			box-sizing: border-box;
			padding-left: 10 / @rem;
		}
		& > .current-row,
		.list-group {
			/*height: 46 / @rem;*/
			box-sizing: border-box;
			padding: 5 / @rem 30 / @rem 5 / @rem 5 / @rem;
			.tag {
				float: left;
				position: relative;
				width: 104 / @rem;
				height: 25 / @rem;
				line-height: 15 / @rem;
				text-align: center;
				border: 0.02rem solid #ccc;
				border-radius: 3 / @rem;
				box-sizing: border-box;
				padding: 5 / @rem 0;
				margin-right: 4 / @rem;
				margin-bottom: 4 / @rem;
			}
		}
		& > .list-group {
			.item {
				width: 16rem;
				height: 26 / @rem;
				line-height: 26 / @rem;
				box-sizing: border-box;
				padding-left: 10 / @rem;
				border-bottom: 1px solid #eee;
			}
		}
	}
}
</style>
