<template>
	<ul class="xm-alphabet">
		<li class="item" v-for="(item, key) of cities" :key="key" @click="getInnerText">{{ key }}</li>
	</ul>
</template>

<script>
export default {
	name: 'Alphabet',
	props: ['cities'],
	methods: {
		getInnerText(e){
			this.$store.commit('setLetters', e.target.innerText)
		}

	}
}
</script>

<style lang="less" scoped>
@rem: 375/16rem;
.xm-alphabet {
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: absolute;
	top: 1.58rem;
	right: 0;
	bottom: 0;
	width: 1.1rem;
	.item {
		line-height: 0.4rem;
		text-align: center;
		color: #00bcd4;
		font-size: 16px;
		box-sizing: border-box;
		padding: 6 / @rem 0;
	}
}
</style>
