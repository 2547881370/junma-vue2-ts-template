<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <el-alert title="切换语言" type="success" effect="dark"> </el-alert>
    <el-button type="primary" @click="setLanguage('zh-CN')">切换中文</el-button>
    <el-button type="primary" @click="setLanguage('en-US')">切换英文</el-button>
    <span>{{ translate("tips.network404") }}</span>
    <el-date-picker v-model="timeData" type="date"> </el-date-picker>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Ref, Vue, Watch } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";
import { UserStoreModule } from "@/store/modules/user";
import { UserEntity } from "@/store/modules/user/definitions";
import BaseVue from "@/common/base-vue.vue";
import { I18nType } from "@/store/modules/settings/types";
import { SettingsStoreModule } from "@/store/modules/settings";
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
  onPersonChanged1(val: UserEntity, oldVal: UserEntity) {}

  // ref
  @Ref("helloWorldRef") readonly helloWorldRef!: HelloWorld;

  created() {
    console.log(UserStoreModule.loginInfo); // state
    console.log(UserStoreModule.userName); // getter
    UserStoreModule.UPDATE_USER_INFO({}); // Mutation
    UserStoreModule.CLEAR_PREV_USER({}); // actions
  }

  mounted() {}

  public setLanguage(language: I18nType) {
    SettingsStoreModule.UPDATE_USER_INFO(language);
  }
}
</script>
