import BaseVue from "@/common/base-vue";
import { template } from "lodash";
import { Component, Prop, Ref, Vue, Watch } from "vue-property-decorator";
import ErrorComponent, { ErrorComponentProps } from "./components/error";

@Component(
    {
        components: {
            ErrorComponent
        }
    }
)
export default class Page403 extends BaseVue {

    protected render() {
        return (
            <div>
                <ErrorComponent
                errorImage={require('@/assets/sys/image/403.png')}
                >
                {/* <template slot='bullshit-return-home'>hello world</template> */}
                </ErrorComponent>
            </div>
        )
    }

}