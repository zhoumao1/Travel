<template>
	<div class="xm-list" ref="wrapper">
		<div class="list">
			<div class="title">当前城市</div>
			<div class="current-row">
				<div class="tag">上海</div>
				<div class="tag">上海</div>
			</div>
			<div class="title">热门城市</div>
			<div class="list-group">
				<div class="title">A</div>
				<div class="item">als</div>
				<div class="item">als</div>
				<div class="item">als</div>
			</div>
			<div class="list-group">
				<div class="title">A</div>
				<div class="item">als</div>
				<div class="item">als</div>
				<div class="item">als</div>
			</div>
			<div class="list-group">
				<div class="title">A</div>
				<div class="item">als</div>
				<div class="item">als</div>
				<div class="item">als</div>
			</div>
			<div class="list-group">
				<div class="title">A</div>
				<div class="item">als</div>
				<div class="item">als</div>
				<div class="item">als</div>
			</div>
			<div class="list-group">
				<div class="title">A</div>
				<div class="item">als</div>
				<div class="item">als</div>
				<div class="item">als</div>
			</div>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
	name: 'List',
	mounted() {
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
			height: 26 / @rem;
			line-height: 26 / @rem;
			font-size: 13px;
			color: #666666;
			background: #eee;
			box-sizing: border-box;
			padding-left: 10 / @rem;
		}
		& > .current-row {
			height: 46 / @rem;
			box-sizing: border-box;
			padding: 5 / @rem 30 / @rem 5 / @rem 5 / @rem;
			.tag {
				float: left;
				position: relative;
				top: 6 / @rem;
				margin-right: 10 / @rem;
				width: 104 / @rem;
				height: 25 / @rem;
				line-height: 15 / @rem;
				box-sizing: border-box;
				padding: 5 / @rem 0;
				border: 0.02rem solid #ccc;
				border-radius: 3 / @rem;
				text-align: center;
			}
		}
		& > .list-group {
			.item {
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
