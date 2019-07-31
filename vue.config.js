const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const fs = require('fs')

module.exports = {
	// publicPath: './',
	runtimeCompiler: true,
	// 配置路径别名
	chainWebpack: config => {
		config.resolve.alias
			.set('@', resolve('src'))
			// .set('_c', resolve('src/components/'))
			// .set('_as', resolve('src/assets/'))
	}
}
