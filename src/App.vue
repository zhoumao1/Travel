<template>
	<div id="app">
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
import Home from '@/views/Home'

export default {
	name: 'app'
}
</script>

<style lang="less">
@rem: 375/16rem;
.g-pd {
	padding: 0 10 / @rem;
}
</style>
