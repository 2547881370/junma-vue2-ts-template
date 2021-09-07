import { Component, Prop, Ref, Vue, Watch } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld/HelloWorld";
import { UserStoreModule } from "@/store/modules/user";
import { UserEntity } from "@/store/modules/user/definitions";
import BaseVue from "@/common/base-vue";
import { I18nType } from "@/store/modules/settings/types";
import { SettingsStoreModule } from "@/store/modules/settings";
import { TimePicker } from 'element-ui';
@Component({
  components: {
    HelloWorld,
  },
  beforeRouteLeave(to: any, from: any, next: any) {
    console.log("beforeRouteLeave");
    next();
  },
  beforeRouteEnter(to: any, from: any, next: any) {
    console.log("beforeRouteLeave");
    next();
  },
})
// export default class Home extends BaseVue {
export default class Home extends BaseVue {
  // 如果数据不在data函数中返回, 直接定义, 初始值是undefined,那么这个数据将不会跟踪响应, 即不是响应式数据

  // data
  // 是响应式数据
  // private message = "Hello World!";
  // 不是响应式数据
  // private message1 = undefined;
  // 是响应式数据
  // private message2 = null;
  private timeData: string[] = [];

  // 是响应式数据
  data() {
    return {
      message3: null,
    };
  }

  // prop
  @Prop({ default: "default value", type: String }) readonly title!: string;

  // watch
  @Watch("person", { immediate: true, deep: true })
  onPersonChanged1(val: UserEntity, oldVal: UserEntity) { }

  // ref
  @Ref("helloWorldRef") readonly helloWorldRef!: HelloWorld;

  created() {
    console.log(UserStoreModule.loginInfo); // state
    console.log(UserStoreModule.userName); // getter
    UserStoreModule.UPDATE_USER_INFO({}); // Mutation
    UserStoreModule.CLEAR_PREV_USER({}); // actions
  }

  mounted() { }

  public setLanguage(language: I18nType) {
    SettingsStoreModule.UPDATE_USER_INFO(language);
  }

  protected render() {
    return (
      <div class="home">
        <el-alert title="使用组件" type="success" effect="dark"> </el-alert>
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
        <TimePicker v-model={this.timeData} type="date"> </TimePicker>


        <el-alert title="切换语言" type="success" effect="dark"> </el-alert>
        <el-button type="primary" onClick={() => this.setLanguage('zh-CN')}>切换中文</el-button>
        <el-button type="primary" onClick={() => this.setLanguage('en-US')}>切换英文</el-button>
        <span>{this.translate("tips.network401")}</span>


        <el-alert title="使用icon" type="success" effect="dark"> </el-alert>
        <div style={{width: "30px", height: "30px"}}>
          <svg-icon iconClass="wifi" style={{color:"#4088d0",fontSize : "300px"}}></svg-icon>
          <svg-icon iconClass="el-icon-delete"></svg-icon>
        </div>
      </div>
    )
  }
}