import BaseVue from "@/common/base-vue";
import css from "./styles/style.module.less"

import { Component, Prop, Ref, Vue, Watch } from "vue-property-decorator";

@Component
export default class SideBar extends BaseVue {

    get logoSrc(){
        // TODO 根据不同的主题,和菜单栏的收缩状态来决定log的展示
        return  require('@/assets/sys/image/default-logo-fold.png')
    }

    protected render() {
        return (
            <div class={css['left-sidebar']}>
                <div class="logo">
                    <div class="left">
                        <el-image src={this.logoSrc}><i slot="error" /></el-image>
                </div>
                {/* <el-switch v-model={themeModel} active-value="night" inactive-value="day" onChange={transTheme}></el-switch> */}
                </div >
            </div >
        )
    }
}