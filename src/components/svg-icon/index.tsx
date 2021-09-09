import BaseVue from "@/common/base-vue";
import { Component, Prop } from "vue-property-decorator";
import css from "./style.module.less"
export interface ISvgIconProps {
    iconClass: string,
    className?: string | null,
}

@Component
export default class SvgIcon extends BaseVue<ISvgIconProps>{
    @Prop() iconClass!: string;
    @Prop() className!: string | null;

    get isElementIcon() {
        return /^(el-icon)/.test(this.iconClass)
    }

    get iconName() {
        return `#icon-${this.iconClass}`
    }

    get svgClass() {
        let className = css['svg-icon']
        if (this.className) {
            return className + " " + this.className
        } else {
            return className
        }
    }

    get styleExternalIcon() {
        return {
            mask: `url(${this.iconClass}) no-repeat 50% 50%`,
            '-webkit-mask': `url(${this.iconClass}) no-repeat 50% 50%`
        }
    }

    protected render() {
        return (
            <div class={css["icon-container"]}>
                {
                    !this.isElementIcon ?

                      <svg  class={this.svgClass} aria-hidden="true" v-on={this.$listeners}>
                          <use xlinkHref={this.iconName} ></use>
                      </svg>

                      :

                      <i  class={[this.iconClass, this.className]} v-on={this.$listeners}></i>
                }
            </div>
        );
    }
}
