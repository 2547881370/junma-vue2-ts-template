import BaseVue from "@/common/base-vue";
import { Component, Prop, Ref, Vue, Watch } from "vue-property-decorator";
import css from "./styles/style.module.less"

@Component
export default class LayoutNavComponent extends BaseVue {
    protected render() {
        return (
            <div class={css['layout-nav-component']}>
                nav
            </div>
        )
    }
}