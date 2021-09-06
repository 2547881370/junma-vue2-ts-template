'use strict';
const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json", ".ts", ".tsx"]
    },
    devtool: 'source-map',
  },
  /** TODO css modules 开启后, 其他库的样式不生效 */
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