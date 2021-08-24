import { Commit } from "vuex";
import { ActionsType, IMenuList, IStaffMenuList, IUserInfo, MutationType } from "./types";

export class StateModel {

    // 用户信息
    userInfo: IUserInfo;

    //token信息
    token: string | undefined;

    //菜单列表
    menuList: IMenuList[];

    //员工端菜单列表
    staffMenuList: IStaffMenuList[];

    // 上一个登录的用户
    prevUser: string | undefined;
}

export type PartialStateModel = Partial<StateModel>

export class MutationModel {

    [MutationType.UPDATE_USER_INFO]: (state: PartialStateModel, data: string) => void;

    [MutationType.UPDATE_MENU_LIST]: (state: PartialStateModel, data: IMenuList[]) => void;

    [MutationType.SET_STAFF_MENU_LIST]: (state: PartialStateModel, data: IStaffMenuList[]) => void;
}

export class ActionsModel {
    [ActionsType.CLEAR_PREV_USER]: (options: Commit) => void;
}