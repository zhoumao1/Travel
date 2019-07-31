<template>
	<div class="xm-search">
		<div>
			<xm-header>
				<template #center>
					城市选择
				</template>
			</xm-header>
			<div class="search">
				<input
					type="text"
					v-model="keyword"
					placeholder="输入城市名或拼音"
				/>
			</div>
			<div class="search-content" ref="search" v-show="keyword">
				<ul>
					<li class="search-item" v-for="item in list" :key="item.id">
						{{ item.name }}
					</li>
					<li class="search-item" v-show="hasNoData">
						没有找到匹配数据
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'

import Header from '@/share/Header'
export default {
	name: 'Search',
	props: ['cities'],
	data() {
		return {
			keyword: ''
		}
	},
	mounted() {
		this.scroll = new BScroll(this.$refs.search, {
			click: true
		})
	},
	computed: {
		list() {
			let result = ''

			for (let key in this.cities) {
				result = this.cities[key].filter(item => {
					if (item.spell.includes(this.keyword)) {
						return item
					}
				})
			}
			console.log(result)
			return result
		},
		hasNoData(){
			return !this.list.length
		}
	},
	components: {
		xmHeader: Header
	}
}
</script>

<style lang="less" scoped>
@rem: 375/16rem;
.xm-search {
	background: #00bcd4;

	.search {
		height: 36 / @rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		input {
			width: 365 / @rem;
			height: 31 / @rem;
			background: #ffffff;
			box-sizing: border-box;
			padding: 0 5 / @rem;
			margin: 0 auto;
			border-radius: 3 / @rem;
			text-align: center;
		}
	}
	.search-content {
		z-index: 1;
		overflow: hidden;
		position: absolute;
		top: 3.44rem;
		left: 0;
		right: 0;
		bottom: 0;
		background: #eee;
		.search-item {
			width: 16rem;
				height: 26 / @rem;
				line-height: 26 / @rem;
				box-sizing: border-box;
				padding-left: 10 / @rem;
				border-bottom: 1px solid #eee;
			background: #fff;
			color: #666;
		}
	}
}
</style>
