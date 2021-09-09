import { Module, VuexModule, Mutation, Action, getModule, } from 'vuex-module-decorators';

import store from '@/store';
import {RouteConfigType} from '@/router';
import { MutationType } from './types';
import Utils from '@/common/utils/utils';

@Module({
  name: 'tabs', dynamic: true, namespaced: true, store,
})
export default class TabsStore extends VuexModule {
  //state
  public visitedRoutes: RouteConfigType[] = [];

  get findVisitedRoutes() : RouteConfigType[]{
    return this.visitedRoutes;
  }

  @Mutation
  [MutationType.ADD_VISITED_ROUTES](route: RouteConfigType): any {
    const _route = this.visitedRoutes.find((item) => {
      return item.path === route.path
    })
    if(!Utils.isEmpty(_route)){
      return false
    }
    this.visitedRoutes.push(route)
  }

  @Mutation
  [MutationType.DELETE_VISITED_ROUTES](route: RouteConfigType): void {
    this.visitedRoutes = this.visitedRoutes.filter((item) => {
      return item.path !== route.path
    })
  }
}

export const TabsStoreModule = getModule(TabsStore);
