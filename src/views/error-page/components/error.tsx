import BaseVue from "@/common/base-vue";
import Utils from "@/common/utils/utils";
import { VNode } from "vue";
import { Component, Prop, Ref, Vue, Watch } from "vue-property-decorator";
import "../styles/index.module.less"
export interface ErrorComponentProps {
    jumpTime?: number;
    oops?: string;
    headline?: string;
    info?: string;
    errorImage: string;
}

// 作用域插槽类型
type ErrorComponentScopedSlots = {
    row: {
        jumpTime : number;
    }
}
@Component
export default class ErrorComponent extends BaseVue<ErrorComponentProps, {}, ErrorComponentScopedSlots> {
    @Prop({ default: 5 }) protected jumpTime!: number
    @Prop({ default: Utils.translate("tips.errPageOops")}) protected oops!: string
    @Prop({ default: Utils.translate("tips.errPageHeadline") }) protected headline!: string
    @Prop({ default: Utils.translate("tips.errPageiInfo") }) protected info!: string
    @Prop() protected errorImage!: string

    protected render() {
        return (
            <div class='error-container'>
                <div class='error-content'>
                    <el-row gutter={20}>
                        <el-col lg={12} md={12} sm={12} xl={12} xs={12}>
                            <div class="pic-error">
                                <el-image
                                    src={this.errorImage}
                                    class="pic-error-parent"
                                />
                                <el-image
                                    src={require('@/assets/sys/image/cloud.png')}
                                    class="pic-error-child left"
                                />
                            </div>
                        </el-col>

                        <el-col lg={12} md={12} sm={24} xl={12} xs={24}>
                            <div class="bullshit">
                                <div class="bullshit-oops">{this.oops}</div>
                                <div class="bullshit-headline">{this.headline}</div>
                                <div class="bullshit-info">{this.info}</div>
                                {
                                    this.$scopedSlots.row({
                                        jumpTime : this.jumpTime
                                    })
                                }
                            </div>
                        </el-col>
                    </el-row >
                </div >
            </div >
        )
    }

}