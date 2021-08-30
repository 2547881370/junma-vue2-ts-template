<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Ref, Vue, Watch } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";
import { UserStoreModule } from "@/store/modules/user";
import { UserEntity } from "@/store/modules/user/definitions";
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
export default class Home extends Vue {
  // 如果数据不在data函数中返回, 直接定义, 初始值是undefined,那么这个数据将不会跟踪响应, 即不是响应式数据

  // data
  // 是响应式数据
  private message = "Hello World!";
  // 不是响应式数据
  private message1 = undefined;
  // 是响应式数据
  private message2 = null;
  // 是响应式数据
  data() {
    return {
      message3: null,
    };
  }

  // prop
  @Prop({ default: 'default value' , type : String}) readonly title!: string

  // watch
  @Watch('person', { immediate: true, deep: true })
  onPersonChanged1(val: UserEntity, oldVal: UserEntity) {}

  // ref
   @Ref('helloWorldRef') readonly helloWorldRef!: HelloWorld

  created() {
    console.log(UserStoreModule.loginInfo); // state
    console.log(UserStoreModule.userName); // getter
    UserStoreModule.UPDATE_USER_INFO({}); // Mutation
    UserStoreModule.CLEAR_PREV_USER({}); // actions
  }

  mounted() {}
}
</script>
