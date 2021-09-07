'use strict';
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      },
      extensions: [".js", ".vue", ".json", ".ts", ".tsx"]
    },
    devtool: 'source-map',
  },
  chainWebpack(config) {
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  css: {
    modules: true,
    sourceMap: false,
    loaderOptions: {
      less: {
        prependData: `element-ui/lib/theme-chalk/index.css"`
      },
    },
    requireModuleExtension: true
  },
}