import { Component, Watch } from "vue-property-decorator";
import BaseVue from "@/common/base-vue";
import css from "@/layout/components/sidebar/styles/style.module.less"
import SidebarItem from "@/layout/components/sidebar/component/sidebar-item/index"
import { constantRoutes, RouteConfigType } from "@/router/index"
import Utils from '@/common/utils/utils';
import {Route} from 'vue-router/types/router';
import { TabsStoreModule } from "@/store/modules/tabs/index"

@Component({
    components: {
        SidebarItem
    }
})
export default class Sidebar extends BaseVue {

    /*默认激活的菜单*/
    private activeMenu = '';

    /*主题模式model*/
    private themeModel = '';

    /**
     * 切换主题
     */
    private transTheme(val: string) {
        // this.$store.commit(SettingsGetterEnum.defTheme, val);
    }

    /**
     * 计算属性（设置主题class）
     */
    get getClass() {
        // let defTheme = this.$store.getters[SettingsGetterEnum.defTheme];
        // this.themeModel = defTheme;
        // return defTheme;
        return this.themeModel
        // return css[this.themeModel]
    }


    @Watch('$route', {immediate: true})
    $routeChange(val : Route) {
        this.activeMenu = Utils.handleActivePath(val)
        this.handleMenuSelect(val.path)
    }

    get logoSrc() {
        return require('@/assets/sys/image/default-logo-fold.png')
    }

    handleMenuSelect(key : string, keyPath? : string){
        // TODO : 应该取组装后之后的route数组,该数组存到sessionStore中和vuex中

        let route = Utils.getTreeOneData<RouteConfigType>(key , constantRoutes , "path" , "children")

        if(!Utils.isEmpty(route)){
            TabsStoreModule.ADD_VISITED_ROUTES(route!)
        }
    }

    protected render() {
        return (
            <div class={[css["left-sidebar"] , this.getClass]}>
                <div class="logo">
                    <div class="left">
                        <el-image src={this.logoSrc}><i slot="error" /></el-image>
                    </div>
                    <el-switch v-model={this.themeModel} active-value="night" inactive-value="day" onChange={this.transTheme}></el-switch>
                </div>
                <el-scrollbar noresize={false}>
                    <el-menu
                        default-active={this.activeMenu}
                        onSelect={(key : string, keyPath : string)=>this.handleMenuSelect(key,keyPath)}
                    >
                        {
                            constantRoutes.map((item) => {
                                return <SidebarItem
                                    key={item.path}
                                    item={item}
                                    basePath={item.path}
                                ></SidebarItem>
                            })
                        }
                    </el-menu>
                </el-scrollbar>
            </div>
        )
    }
}
