import BaseVue from "@/common/base-vue";
import { Component, Prop } from "vue-property-decorator";
import css from "./button.module.less"

export enum ButtonType {
  default = "default",
  primary = "primary"
}

export enum ButtonSize {
  large = "large",
  small = "small"
}
export interface IButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  num: number;
}

@Component
export default class Button extends BaseVue<IButtonProps> {
  @Prop() public type!: ButtonType;
  @Prop() public size!: ButtonSize;
  @Prop({ default: 0 }) public num!: number;

  protected render() {
    return (
      <div class={css.button}>
        <p>id:{this.num}</p>
        {this.type && <p>type:{this.type}</p>}
        {this.size && <p>size:{this.size}</p>}
      </div>
    );
  }
}
