import Vue from 'vue'
import VueI18n from 'vue-i18n'

import elEn from 'element-ui/lib/locale/lang/en'
import elZh from 'element-ui/lib/locale/lang/zh-CN'

import enUS from './en-US'
import zhCN from './zh-CN'

import { SettingsStoreModule } from "@/store/modules/settings";

Vue.use(VueI18n)

const messages = {
	'en-US': {
		...enUS,
		...elEn,
	},
	'zh-CN': {
		...zhCN,
		...elZh,
	},
}

const i18n = new VueI18n({
	locale: SettingsStoreModule.getLanguage,
	messages,
})

export default i18n