import { ElLoadingComponent } from "element-ui/types/loading";
import { Loading, Message, MessageBox, Notification } from "element-ui";
import { ElMessageComponent } from "element-ui/types/message";
import {
  ElNotificationComponent,
  NotificationPosition,
} from "element-ui/types/notification";
import Vue from "vue";
import { ValueTypes } from "@/i18n/types";

export default class BaseVue extends Vue {
  /**
   * 国际化
   * tips.xxxx
   * bizMsg.xxx
   * label.xxxx
   */
  get translate() {
    return (key: ValueTypes, param?: {}): string => {
      if (this.$i18n.te(key)) {
        return this.$i18n.t(key, param) as string;
      }
      return key;
    };
  }

}