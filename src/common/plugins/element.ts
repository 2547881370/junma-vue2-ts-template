import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import i18n from '@/i18n';

Vue.use(ElementUI, {
    size: "mini",
    i18n: (key: any, value: any) => i18n.t(key, value)
});