import BaseVue from "@/common/base-vue";
import css from "./styles/style.module.less"

import { Component, Prop, Ref, Vue, Watch } from "vue-property-decorator";
import sidebar from "./component/sidebar"
import Nav from "./component/nav"
import Tabs from "./component/tabs"
@Component({
    components: {
        sidebar,
        Nav,
        Tabs
    }
})
export default class Layouts extends BaseVue {

    get key() {
        return this.$route.path
    }

    protected render() {
        return (
            <div class={css['app-layout']}>
                <div class={css['main-container']}>
                    <sidebar></sidebar>
                    <div class={css['right-container']}>
                        <section class="app-main">
                            <div class='layout-header'>
                                <Nav></Nav>
                                <Tabs></Tabs>
                            </div>
                            <el-scrollbar ref="scrollbar" class="scroll-wrapper" noresize={false}>
                                <transition name="fade-transform" mode="out-in">
                                    <router-view key={this.key} />
                                </transition>
                            </el-scrollbar>
                        </section>
                    </div>
                </div>
            </div >
        )
    }
}