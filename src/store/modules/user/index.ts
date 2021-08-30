import { Module, VuexModule, Mutation, Action, getModule, } from 'vuex-module-decorators';

import store from '@/store';
import { ActionsType, MutationType } from './types';
import { UserEntity } from './definitions';


@Module({
    name: 'user', dynamic: true, namespaced: true, store,
})
export default class UserStore extends VuexModule {
    //state
    public loginInfo: UserEntity = {};

    // getters
    get userName() {
        return this.loginInfo.name;
    }

    @Mutation
    [MutationType.UPDATE_USER_INFO](user: UserEntity): void {
        this.loginInfo = user;
    }
    
    @Action({ commit: MutationType.UPDATE_USER_INFO })
    [ActionsType.CLEAR_PREV_USER](user: UserEntity): UserEntity {
        return { name: '张三' }
    }
}

export const UserStoreModule = getModule(UserStore);
