import { I18nType } from "@/store/modules/settings/types";

interface ISettingConfig {
    [key : string]: any
    i18n : I18nType
}
/**
 * @description 导出通用配置
 */
export default {
    // 语言类型zh-CN、zh-TW、en-US
    i18n: 'zh-CN',
} as ISettingConfig
