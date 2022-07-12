const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    // proxy: {
    //   '/kuayu': {
    //     target: 'http://httpbin.org',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/kuayu': '',
    //     },
    //   },
    // },
  },
})
