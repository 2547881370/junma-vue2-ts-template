import { ElLoadingComponent } from "element-ui/types/loading";
import { Loading, Message, MessageBox, Notification } from "element-ui";
import { ElMessageComponent } from "element-ui/types/message";
import {
  ElNotificationComponent,
  NotificationPosition,
} from "element-ui/types/notification";
import Vue from "vue";
import { I18nValueTypes } from "@/i18n/types";
import Utils from "./utils/utils";
import * as tsx from "vue-tsx-support";

export default class BaseVue<Props = {}, PrefixedEvents = {}, ScopedSlotArgs = {}> extends tsx.Component<Props, PrefixedEvents, ScopedSlotArgs> {
  
  /**
   * 国际化
   * tips.xxxx
   * bizMsg.xxx
   * label.xxxx
   */
  get translate() {
    return (key: I18nValueTypes, param?: {}): string => {
      return Utils.translate(key, param);
    };
  }

}