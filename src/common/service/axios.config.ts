import i18n from "@/i18n";
import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { Message } from "element-ui";
import { MessageType } from "element-ui/types/message";
import config from "../../config/index";
import { ResponseStatusEnum } from "../enum/common.enum";
import LocalStorageUtil from "../utils/local-storage-util";
import { PendingEntity } from "./definitions";

/*配置接收方式application/json;charset=UTF-8 或 application/x-www-form-urlencoded;charset=UTF-8*/
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
/*配置接口地址 接口地址在系统常量中配置*/
axios.defaults.baseURL = config.baseURL;
/*配置接口请求超时*/
axios.defaults.timeout = 120000;

/*声明一个数组用于存储每个ajax请求的取消函数和ajax标识*/
let pending: PendingEntity[] = [];

let cancelToken = axios.CancelToken;
let removePending = (ever: { url?: string; method?: string; }) => {
    for (let p in pending) {
        if (pending[p].u === ever.url + '&' + ever.method) { //当当前请求在数组中存在时执行函数体
            pending[p].f(); //执行取消操作
            pending.splice(Number(p), 1); //把这条记录从数组中移除
        }
    }
}

axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        let token = LocalStorageUtil.getItem('token') || '';
        config.headers['Authorization'] = 'Bearer ' + token;

        removePending(config); //在一个ajax发送前执行一下取消操作
        config.cancelToken = new cancelToken((c) => {
            // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
            pending.push({ u: config.url + '&' + config.method, f: c });
        });

        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

axios.interceptors.response.use(
    (res: AxiosResponse) => {
        removePending(res.config);

        /*对响应数据做处理*/
        // 如果http状态码不是200
        if (res.status !== ResponseStatusEnum.success) {
            conductRes(res.status, 'error', res.data, res);
        }
        //否则http状态码为200，但服务器返回的状态码不是200
        if (res.status === ResponseStatusEnum.success && res.data.status !== ResponseStatusEnum.success) {
            conductRes(res.data.status, 'warning', res.data.message, res);
        }
        return Promise.resolve(res);
    },
    error => {
        // 取消的请求不做提示
        if (error.__proto__.__CANCEL__) {
            return Promise.reject(error)
        }
        let messageText = '';
        let messageType: MessageType = 'error';
        if (!error.response) {//网络错误
            messageText = i18n.t('tips.networkError') as string;
        } else if (!error.response.data) {//服务器没有响应
            messageText = i18n.t('tips.noResponse') as string;
        } else {
            messageText = error.response.data.message || error.response.data;
        }
        message(messageText, messageType)
        return Promise.reject(error)// 返回接口返回的错误信息
    })


/**
* 处理响应数据
*/
function conductRes(status: ResponseStatusEnum, messageType: MessageType, messageText: string, res: AxiosResponse) {
    switch (status) {
        case ResponseStatusEnum.notFound:
            messageText = i18n.t('tips.network404') as string;
            break;
        // 无权限401
        case ResponseStatusEnum.noAuth:
            messageText = i18n.t('tips.network401') as string;
            break;
        // 登录过期403
        case ResponseStatusEnum.authTimeout:
            messageText = i18n.t('tips.network403') as string;
            // Utils.clearLoginInfo();
            // 延迟跳转，便于用户阅读弹窗信息
            // setTimeout(() => {
            //     router.replace({ name: 'login', query: { redirect: router.currentRoute.name } })
            // }, 1500);
            break;
        default:
            break;
    }
    message(messageText, messageType);
}


/**
 * message提示
 */
let messageObj: { close: () => void; } | null;
function message(messageText: string, type: MessageType) {
    if (messageObj) {
        messageObj.close();
        messageObj = null;
    }
    messageObj = Message({ message: messageText, type: type, showClose: true });
}