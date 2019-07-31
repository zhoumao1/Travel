<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
import Home from '@/views/Home'

export default {
	name: 'app',
	components: {
		// xmHome: Home
	}
}
</script>

<style lang="less">
@rem: 375/16rem;
	.g-pd{
		padding: 0 10/@rem;
	}
</style>
