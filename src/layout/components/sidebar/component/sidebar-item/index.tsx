import { Component, Prop } from "vue-property-decorator";
import BaseVue from "@/common/base-vue";
import css from "./styles/index.module.less"
import { RouteConfig } from "vue-router";
import Utils from "@/common/utils/utils";
// @ts-ignore
import path from 'path'
import MenuItem from "@/layout/components/sidebar/component/menu-item/index"
import { Fragment } from 'vue-fragment'
import {RouteConfigType} from '@/router';


interface SidebarItemProps {
    item: RouteConfigType,
    basePath: string
}

@Component({
    components: {
        MenuItem,
        Fragment
    }
})
export default class SidebarItem extends BaseVue<SidebarItemProps>{
    @Prop() item: RouteConfigType;
    @Prop() basePath: string;

    get isChildren(): boolean {
        if (Utils.isEmpty(this.item.children)) {
            return true
        }
        if (this.item.children!.length <= 1) {
            return true
        }
        return false
    }

    get onlyOneChildPath(): string {
        if (Utils.isEmpty(this.item.children)) {
            return this.item.path
        }
        if (this.item.children!.length <= 1) {
            return this.item.children![0].path
        }
        return this.item.path
    }

    get onlyOneChildIcon(): string {
        if (Utils.isEmpty(this.item.children)) {
            return this.item.meta!.icon
        }
        if (this.item.children!.length <= 1) {
            return this.item.children![0].meta!.icon
        }
        return this.item.meta!.icon
    }

    get onlyOneChildTitle(): string {
        if (Utils.isEmpty(this.item.children)) {
            return this.item.meta!.title
        }
        if (this.item.children!.length <= 1) {
            return this.item.children![0].meta!.title
        }
        return this.item.meta!.title
    }

    resolvePath(routePath: string) {
        return path.resolve(this.basePath, routePath)
    }


    protected render() {
        return (
            <fragment>
                {
                    !this.item.hidden ?
                      (this.isChildren ?
                        (
                          <router-link
                            to={this.resolvePath(this.onlyOneChildPath)}
                          >
                              <el-menu-item index={this.item.path}>
                                  <MenuItem icon={this.onlyOneChildIcon} title={this.onlyOneChildTitle}></MenuItem>
                              </el-menu-item>
                          </router-link>
                        )

                        :

                        <el-submenu index={this.item.path}>
                            <template slot="title">
                                <MenuItem icon={this.item.meta!.icon} title={this.item.meta!.title}></MenuItem>
                            </template>

                            {
                                this.item.children!.map((item) => {
                                    return (
                                      <fragment>
                                          {
                                              Utils.isEmpty(item.children) ?
                                                <router-link
                                                  to={this.resolvePath(item.path)}
                                                >
                                                    <el-menu-item index={item.path}>
                                                        <MenuItem icon={item.meta!.icon} title={item.meta!.title}></MenuItem>
                                                    </el-menu-item>
                                                </router-link>
                                                :
                                                <SidebarItem
                                                  item={item}
                                                  basePath={item.path}
                                                >
                                                </SidebarItem>
                                          }
                                      </fragment>
                                    )
                                })
                            }
                        </el-submenu>
                      )
                      :
                      <fragment></fragment>
                }
            </fragment>
        )
    }
}
