import { Pointers } from "@naomiarotest/studio-enums";
import { Int32Field } from "@naomiarotest/lib-box";
import { Interpolation } from "@naomiarotest/lib-dsp";
export declare namespace InterpolationFieldAdapter {
    const write: (field: Int32Field<Pointers.ValueInterpolation>, value: Interpolation) => void;
    const read: (field: Int32Field<Pointers.ValueInterpolation>) => Interpolation;
}
//# sourceMappingURL=InterpolationFieldAdapter.d.ts.map