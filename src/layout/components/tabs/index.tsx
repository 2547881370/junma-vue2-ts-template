import BaseVue from "@/common/base-vue";
import { Component, Prop, Ref, Vue, Watch } from "vue-property-decorator";
import css from "./styles/style.module.less"
import Utils from '@/common/utils/utils';
import { TabsStoreModule } from "@/store/modules/tabs/index"
import { RouteConfigType } from "@/router";
@Component
export default class LayoutTabsComponent extends BaseVue {

    private tabActive: string = '';

    get visitedRoutes() : RouteConfigType[]{
        // return this.$store.getters[TabsGetterEnum.visitedRoutes]
        return TabsStoreModule.findVisitedRoutes
        return [
            {
                path: '/sysmng/test',
                meta: { title: '测试3', icon: 'alt', noCache: true },
            },
            {
                path: '/sysmng/test1',
                meta: { title: '测试5', icon: 'app', noCache: true },
            },
        ]
    };

    @Watch('$route', {immediate: true})
    handler(route: RouteConfigType) {
        console.log(route)
        this.$nextTick(() => {
            // this.addTabs(route)
            this.tabActive = route.path
        })
    };

    private isActive(path: string): boolean {
        return path === Utils.handleActivePath(this.$route, true);
    };

    private handleTabClick(tab: any) {
        // if (!this.isActive(tab.name))
            this.$router.push(this.visitedRoutes[tab.index])
    };

    /**
     * 根据原生路径删除标签中的标签
     * @param rawPath 原生路径
     * @returns {Promise<void>}
     */
    private async handleTabRemove(rawPath : string) {
        console.log(rawPath,'rawPath')
        TabsStoreModule.DELETE_VISITED_ROUTES({path: rawPath})
        this.toLastTab()
        // await this.delVisitedRoute(rawPath)
        // if (this.isActive(rawPath)) {
        //     this.toLastTab()
        // }
    };

    private delVisitedRoute(val: string) {
        // this.$store.commit(TabsActionsEnum.delVisitedRoute, val)
    };

    /**
     * 跳转最后一个标签页
     */
    private toLastTab() {
        const latestView = this.visitedRoutes.slice(-1)[0];
        if (latestView) {
            this.$router.push(latestView);
        } else {
            this.$router.push('/');
        }
    };

    private isNoClosable(tag: any): boolean {
        return this.visitedRoutes.length > 1;
    };


    

    protected render() {
        return (
            <div class={css['layout-tabs-component']}>
                <el-tabs v-model={this.tabActive}
                    class="vab-tabs-content-smooth"
                    type="card"
                    on-tab-click={(key : any) => this.handleTabClick(key)}
                    on-tab-remove={(key : string) => this.handleTabRemove(key)}>
                    {
                        this.visitedRoutes.map((item: RouteConfigType ) => {
                            return (
                                <el-tab-pane
                                    key={item.path}
                                    closable={this.isNoClosable(item)}
                                    name={item.path}>
                                    <span slot="label" style="display: inline-block">
                                        <span>{item.meta?.title}</span>
                                    </span>
                                </el-tab-pane>
                            )
                        })
                    }

                </el-tabs>
            </div>
        )
    }
}
