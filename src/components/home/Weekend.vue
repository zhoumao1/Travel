<template>
	<div class="xm-weekend">
		<div class="title">
			<span>周末去哪儿</span>
		</div>
		<div class="content g-pd">
			<router-link
				tag="div"
				class="row clearfix"
				v-for="item in weekendList"
				:key="item.index"
				:to="{name: 'detail', params: {id: item.id}}"
			>
				<div
					class="image"
					:style="{ backgroundImage: `url(${item.imgUrl})` }"
				></div>
				<div class="right">
					<h2 class="title">{{ item.title }}</h2>
					<p class="desc">{{ item.desc }}</p>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Weekend',
	props: ['weekendList']
}
</script>

<style lang="less" scoped>
@rem: 375/16rem;
.xm-weekend {
	font-size: 14px;
	color: #333333;
	margin-top: 10 / @rem;
	line-height: 40 / @rem;
	box-sizing: border-box;
	& > .title {
		padding-left: 10 / @rem;
		background: #eeeeee;
		height: 40 / @rem;
	}
	.content {
		height: 173 / @rem;
		.row {
			box-sizing: border-box;
			padding: 10 / @rem 0;
			.image {
				float: left;
				width: 100 / @rem;
				height: 100 / @rem;
				background-size: cover;
				background-position: center center;
			}
			.right {
				float: left;
				margin-left: 11 / @rem;
				padding-top: 13 / @rem;
				box-sizing: border-box;
				background: #ffffff;
				& > .title {
					font-size: 16px;
					color: #212121;
					background: #ffffff;
				}
				.desc {
					font-size: 12px;
					color: #616161;
					margin-top: 7 / @rem;
				}
			}
		}
	}
}
</style>
