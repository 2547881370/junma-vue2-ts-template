import BaseVue from "@/common/base-vue";
import { Component, Prop, Ref, Vue, Watch } from "vue-property-decorator";
import ErrorComponent from "./components/error";

@Component(
    {
        components: {
            ErrorComponent
        }
    }
)
export default class Page404 extends BaseVue {

    private btn: string = this.translate("tips.back")
    private timer: number = 0
    private jumpTime: number = 10005

    mounted() {
        this.timeChange()
    }

    beforeDestroy() : void {
        this.timer && window.clearTimeout(this.timer)
    }

    private timeChange() {
        this.timer && window.clearTimeout(this.timer)
        this.jumpTime -= 1
        if (this.jumpTime === 0) {
            return this.$router.push('/')
        }

        this.timer = window.setTimeout(() => {
            this.timeChange()
        }, 1000)
    }

    protected render() {
        return (
            <div>
                <ErrorComponent jumpTime={this.jumpTime} errorImage={require('@/assets/sys/image/404.png')}
                    scopedSlots={{
                        row: item => (
                            <router-link class="bullshit-return-home" to="/">
                                {item.jumpTime}s&nbsp;{this.btn}
                            </router-link>
                        )
                    }}>
                </ErrorComponent>
            </div>
        )
    }

}