import { MutationTree, ActionTree, GetterTree } from "vuex";
import { StateModel } from "./model";
import { ActionsType, IMenuList, IStaffMenuList, IUserInfo, MutationType } from "./types";

const state = (): StateModel => ({
    userInfo: {},
    token: undefined,
    menuList: [],
    staffMenuList: [],
    prevUser: undefined,
})

const getters : GetterTree<StateModel,any> = {
    userName: (state) => state.userInfo.name,
}


const mutations: MutationTree<StateModel> = {
    [MutationType.UPDATE_USER_INFO]: (state, userInfo: IUserInfo) => {
        throw new Error("Function not implemented.");
    },

    [MutationType.UPDATE_MENU_LIST]: function (state, data: IMenuList[]): void {
        throw new Error("Function not implemented.");
    },

    [MutationType.SET_STAFF_MENU_LIST]: function (state, data: IStaffMenuList[]): void {
        throw new Error("Function not implemented.");
    },
}


const actions: ActionTree<StateModel, any> = {
    [ActionsType.CLEAR_PREV_USER]: function (content, payload): void {
        throw new Error("Function not implemented.");
    }
}

export default { state, mutations, actions }