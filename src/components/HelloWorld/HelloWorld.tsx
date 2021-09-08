import { Component, Prop, Vue } from "vue-property-decorator";
import TestButton from "./button"
import { Button, Select, Option } from 'element-ui';
import BaseVue from "@/common/base-vue";

@Component({
  components: {
    TestButton
  }
})
export default class HelloWorld extends BaseVue<{msg : string}> {
  @Prop() private msg!: string;

  private value: string | null = null;

  protected render() {
    return (
      <div class="hello">
        <h1>{this.msg}</h1>
        <TestButton num={1}></TestButton>
        <el-button type="success">123132</el-button>
        <Button type="success">测试</Button>
        <Select v-model={this.value}>
          <Option value="选项1" label="黄金蛋糕"></Option>
        </Select>
      </div>
    )
  }
}


