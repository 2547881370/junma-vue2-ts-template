import { I18nValueTypes } from "@/i18n/types"
import _ from "lodash"
import i18n from "@/i18n";

type DateFormatKeyType = "y+" | "M+" | "d+" | "H+" | "m+" | "s+"
type DateFormatType = {
    [key in DateFormatKeyType]: string
}

type ElementEventType = {
    (element: HTMLElement, event: string, handler: EventListenerOrEventListenerObject, useCapture: boolean,): void
}

/**
 * @description 工具类
 */
export default class Utils {
    /**
     * @description addEventListener
     * @type {function(...[*]=)}
     */
    public static on = (): ElementEventType => {
        return function (element, event, handler, useCapture = false) {
            if (element && event && handler) {
                element.addEventListener(event, handler, useCapture)
            }
        }
    }

    /**
     * @description removeEventListener
     * @type {function(...[*]=)}
     */
    public static off = (): ElementEventType => {
        return function (element, event, handler, useCapture = false) {
            if (element && event) {
                element.removeEventListener(event, handler, useCapture)
            }
        }
    }

    /**
     * 退出登录清除信息（注意某些用户配置不要删除，具体请在各自store模块中处理）
     */
    public static clearLoginInfo() {
        // store.dispatch(UserMutationEnum.clearUserInfo);
        // store.dispatch(StoreDictEnum.clearDict);
        // store.dispatch(TabsActionsEnum.delAllVisitedRoutes);
        // store.dispatch(OrgTreeDataActionEnum.clear);
    }


    /**
     * 是否为空（空字符串、空数组、空对象、null、undefined、[]、{}、''）
     */
    public static isEmpty(data: any): boolean {
        return (_.isNumber(data) && _.isNil(data)) || (_.isEmpty(data) && !_.isNumber(data) || !data);
    }

    /**
     * 时间转换
     */
    public static dateFormat(date: Date, format: string = 'yyyy-MM-dd HH:mm:ss'): string {
        let ret;
        const opt: DateFormatType = {
            "y+": date.getFullYear().toString(),
            "M+": (date.getMonth() + 1).toString(),
            "d+": date.getDate().toString(),
            "H+": date.getHours().toString(),
            "m+": date.getMinutes().toString(),
            "s+": date.getSeconds().toString()
            // 有其他格式化字符需求可以继续添加，必须转化成字符串
        };
        for (let k in opt) {
            ret = new RegExp("(" + k + ")").exec(format);
            if (ret) {
                format = format.replace(ret[1], (ret[1].length == 1) ?
                    (opt[k as DateFormatKeyType]) : (opt[k as DateFormatKeyType].padStart(ret[1].length, "0")));
            }
        }
        return format;
    }

    // 国际化
    public static translate(key: I18nValueTypes, param?: {}): string {
        if (i18n.te(key)) {
            return i18n.t(key, param) as string;
        }
        return key;
    };
}

