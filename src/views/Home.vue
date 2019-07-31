<template>
	<div class="xm-home">
		<xm-header>
			<template #center>
				<input type="text" placeholder="请输入地址" />
			</template>
			<template #right>
				北京
			</template>
		</xm-header>
		<xm-banner-swiper></xm-banner-swiper>
<xm-icons></xm-icons>
	</div>
</template>

<script>
import Header from '@/share/Header'
import BannerSwiper from '@/components/home/BannerSwiper'
import Icons from '@/components/home/Icons'

export default {
	name: 'xm-home',
	components: {
		xmHeader: Header,
		xmBannerSwiper: BannerSwiper,
		xmIcons: Icons
	}
}
</script>

<style lang="less" scoped></style>
