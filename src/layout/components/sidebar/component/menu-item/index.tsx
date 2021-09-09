import { Component, Prop } from "vue-property-decorator";
import BaseVue from "@/common/base-vue";
import css from "./styles/index.module.less"
import { Fragment } from 'vue-fragment'
interface MenuItemProps {
    icon: string;
    title: string
}

@Component({
    components :{
        Fragment
    }
})
export default class MenuItem extends BaseVue<MenuItemProps>{
    @Prop() icon: string;
    @Prop() title: string;

    protected render() {
        return (
            <div>
                {/*<i class="el-icon-location"></i>*/}
                <svg-icon iconClass={this.icon}></svg-icon>
                <span slot="title">{this.title}</span>
            </div>
        )
    }
}
