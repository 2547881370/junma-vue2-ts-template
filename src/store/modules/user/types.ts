export interface IUserInfo {

}

export interface IMenuList {

}

export interface IStaffMenuList {

}

export enum MutationType {

    // 更新人员信息
    UPDATE_USER_INFO,

    // 更新菜单数据
    UPDATE_MENU_LIST,

    // 设置员工端菜单数据
    SET_STAFF_MENU_LIST,

    // 清除登录信息
    CLEAR_USER_INFO,

    // 清除上次登录的用户记录
    CLEAR_PREV_USER
}


export enum ActionsType {

    // 清除登录信息
	CLEAR_USER_INFO,

	CLEAR_PREV_USER,
}