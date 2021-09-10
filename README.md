+ 物料
    + vue3.0 cli
    + vue-property-decorator
    + vuex-module-decorators
    + elementUI
    + normalize.css
    + 参考资料
        + https://github.com/kaorun343/vue-property-decorator#Prop
        + https://blog.csdn.net/sllailcp/article/details/102542796/
        + https://class-component.vuejs.org/guide/additional-hooks.html
        + https://www.npmjs.com/package/vuex-module-decorators

        + https://github.com/maskletter/tenp-tsxvue/tree/master/element-ui
        + https://www.cnblogs.com/vaynewang/p/10794128.html
+ 目录结构搭建
    + assets
    + common
        + api
            + common-api.ts
    + config
    + icons
    + layout
    + router
    + store
        + modules
            + user
                + definitions.ts
                + index.ts
                + types.ts
        + index.ts
    + components
        + 业务组件
    + vab
        + 功能组件
            + styles
            + components
            + plugins
    + view
        + login
            + styles
            + mixins
            + components
            + service.ts
            + index.vue

+ 新增基础功能
    + 登录页面
    + 404
    + 503
    + 路由权限
    + 菜单权限
    + i18n
    + icon

+ 文件上传
    + 暂停
    + 断点续传
    + 多文件
        + 队列上传
    + 技术调研
        + 考虑到通用性,不用第三方请求库,使用原生 XMLHttpRequest
        + https://juejin.cn/post/6844904046436843527#heading-6
        + https://blog.csdn.net/xgangzai/article/details/108544040


