import Vue from "vue";
import * as base from "vue-tsx-support/types/base";
import * as builtin from "vue-tsx-support/types/builtin-components";

declare global {
  namespace JSX {
    interface Element extends base.Element {}
    interface ElementClass extends base.ElementClass {}
    type LibraryManagedAttributes<C, P> = C extends new () => infer V
      ? base.CombinedTsxComponentAttrs<
          base.AttributesOf<V>,
          base.PropsOf<V>,
          base.PrefixedEventsOf<V>,
          base.OnOf<V>,
          V extends { $scopedSlots: infer X } ? X : {},
          base.IsPropsObjectAllowed<V>
        > &
          (V extends { _tsxattrs: infer T } ? T : {})
      : P;

      interface IntrinsicElements extends base.IntrinsicElements {
        // allow unknown elements
        [name: string]: any;

        // builtin components
        transition: base.TsxComponentAttrs<builtin.TransitionProps>;
        "transition-group": base.TsxComponentAttrs<builtin.TransitionGroupProps>;
        "keep-alive": base.TsxComponentAttrs<builtin.KeepAliveProps>;
    }
  }
}

