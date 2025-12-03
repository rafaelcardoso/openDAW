import { AssertType } from "@naomiarotest/lib-std";
import { Groove } from "@naomiarotest/lib-dsp";
import { BoxAdapter } from "../BoxAdapter";
export interface GrooveAdapter extends BoxAdapter, Groove {
    type: "groove-adapter";
}
export declare namespace GrooveAdapter {
    const checkType: AssertType<GrooveAdapter>;
}
//# sourceMappingURL=GrooveBoxAdapter.d.ts.map