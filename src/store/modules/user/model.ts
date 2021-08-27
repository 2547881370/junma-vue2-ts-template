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