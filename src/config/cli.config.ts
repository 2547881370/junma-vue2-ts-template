/**
 * @description 导出vue/cli配置
 */
 export default {
    baseURL: process.env.NODE_ENV === 'development' ? '/dev-api' : '/prod-api',
  }
  