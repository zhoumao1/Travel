<template>
	<div id="app">
		<keep-alive>
			<xm-fade>
				<router-view></router-view>
			</xm-fade>
		</keep-alive>
	</div>
</template>

<script>
import Fade from '@/share/Animation/Fade'

export default {
	name: 'app',
	components: {
		xmFade: Fade
	}
}
</script>

<style lang="less">
@rem: 375/16rem;
.g-pd {
	padding: 0 10 / @rem;
}
</style>
