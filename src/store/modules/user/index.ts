import { Commit } from "vuex";
import { ActionsModel, MutationModel, PartialStateModel, StateModel } from "./model";
import { ActionsType, IMenuList, IStaffMenuList, IUserInfo, MutationType } from "./types";

const state = (): StateModel => ({
    userInfo: {},
    token: undefined,
    menuList: [],
    staffMenuList: [],
    prevUser: undefined,
})


const mutations: MutationModel = {
    [MutationType.UPDATE_USER_INFO]: (state: PartialStateModel, userInfo : IUserInfo) => {
        
    },

    [MutationType.UPDATE_MENU_LIST]: function (state: PartialStateModel, data: IMenuList[]): void {
        throw new Error("Function not implemented.");
    },

    [MutationType.SET_STAFF_MENU_LIST]: function (state: PartialStateModel, data: IStaffMenuList[]): void {
        throw new Error("Function not implemented.");
    },
}


const actions : ActionsModel = {
    [ActionsType.CLEAR_PREV_USER]: function (options: Commit): void {
        throw new Error("Function not implemented.");
    }
}