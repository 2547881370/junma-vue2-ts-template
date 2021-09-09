import { I18nValueTypes } from "@/i18n/types"
import _ from "lodash"
import i18n from "@/i18n";
import { Route } from 'vue-router/types/router';

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


    /**
     * 根据当前route获取激活菜单
     * @param route 当前路由
     * @param isTabsBar 是否是标签
     * @returns {string|*}
     */
    public static handleActivePath(route: Route, isTabsBar = false) {
        const { meta, path, fullPath } = route;
        const rawPath = route.matched ? route.matched[route.matched.length - 1].path : path;
        if (isTabsBar) {
            return meta!.dynamicNewTab ? fullPath : rawPath;
        }
        if (meta!.activeMenu) {
            return meta!.activeMenu;
        }
        return fullPath ? fullPath : rawPath
    }


    /**
     * @summary 遍历tree,查找指定id的数据对象
     * @param id
     * @param data
     * @param idName
     * @param childName
     * @return {Object}
     */
    public static getTreeOneData<T extends { [key: string]: any }>(id: string, data: T[], idName: string = 'id', childName: string = 'children'): T | null {
        let hasFound = false, // 表示是否有找到id值
            result = null
        let fn = function (data: T[]) {
            if (Array.isArray(data) && !hasFound) {
                // 判断是否是数组并且没有的情况下，
                data.forEach(item => {
                    if (item[idName] === id) {
                        // 数据循环每个子项，并且判断子项下边是否有id值
                        result = item // 返回的结果等于每一项
                        hasFound = true // 并且找到id值
                    } else if (item[childName]) {
                        fn(item[childName]) // 递归调用下边的子项
                    }
                })
            }
        }
        fn(data) // 调用一下
        return result
    }

}

