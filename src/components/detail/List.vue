<template>
	<div class="xm-list g-pd">
		<ul class="list">
			<li v-for="(item, index) in categoryList" :key="index">
				{{ item.title }}
				<div class="children" v-if="item.children">
					<list :categoryList="item.children"></list>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
// import ChildrenList from '@/components/detail/ChildrenList'

export default {
	name: 'List',
	props: ['categoryList']
	// components: {
	// 	xmChildrenList: ChildrenList
	// }
}
</script>

<style lang="less" scoped>
@rem: 375/16rem;
.xm-list {
	margin-top: 10 / @rem;
	.list {
		li {
			padding: 4 / @rem 16 / @rem;
			margin-bottom: 4 / @rem;
			position: relative;
			&:before {
				content: '';
				position: absolute;
				left: 0;
				top: 8 / @rem;
				width: 6 / @rem;
				height: 6 / @rem;
				border: #eb9 solid;
				border-width: 0 3 / @rem 3 / @rem 0;
				transform: rotate(45deg);
			}
			.children{
				margin-top: 4/@rem;
				padding-left: 26/@rem;
			}
		}
	}
}
</style>
