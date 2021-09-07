
// 字符串模板类型 type T3 = `${'tips'}.${'network404' | 'network401'}`;
type T3<M extends string, N extends string> = `${M}.${N}`;
type ConvertDataFormatStringTemplteType<T> = {
    [K in keyof T]: T3<K & string, keyof T[K] & string>
}
type ExpandDataType<T> = T[keyof T]
export type ValueType<T> = ExpandDataType<ConvertDataFormatStringTemplteType<T>>

// 导出数据类型
export type I18ndataType = {
    tips: {
        network404: string;
        network401: string;
        network403: string;
        networkError: string;
        noResponse: string;
    }
}
export type I18nValueTypes =  ValueType<I18ndataType>