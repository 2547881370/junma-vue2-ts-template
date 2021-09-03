import _ from 'lodash';

/**
 * localStorage工具类
 */
export default class LocalStorageUtil {
    /**
     * 新增
     */
    public static addItem(key: string, obj: any): void {
        if (_.isString(obj)) {
            localStorage.setItem(key, obj);
        } else {
            localStorage.setItem(key, JSON.stringify(obj));
        }
    }

    /**
     * 修改
     */
    public static updateItem(key: string, obj: Object): void {
        const item = localStorage.getItem(key);
        if (!_.isNull(item)) {
            localStorage.setItem(key, JSON.stringify(obj));
        } else {
            // console.error(`the ${key} is not exists`);
        }
    }

    /**
     * 删除
     */
    public static deleteItem(key: string): void {
        const item = localStorage.getItem(key);
        if (!_.isNull(item)) {
            localStorage.removeItem(key);
        } else {
            // console.error(`the ${key} is not exists`);
        }
    }

    /**
     * 获取key
     */
    public static getItem(key: string): string | null {
        return localStorage.getItem(key);
    }

    public static getObjectItem(key: string): Object {
        let valye = localStorage.getItem(key)
        if (_.isNull(valye)) {
            return {}
        } else {
            return JSON.parse(valye);
        }
    }

    /**
     * 清空全部
     */
    public static deleteAll(): void {
        localStorage.clear();
    }
}
