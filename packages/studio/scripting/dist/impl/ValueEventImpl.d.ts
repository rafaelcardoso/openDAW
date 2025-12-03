import { ValueEvent } from "../Api";
import { Interpolation, ppqn } from "@naomiarotest/lib-dsp";
import { unitValue } from "@naomiarotest/lib-std";
export declare class ValueEventImpl implements ValueEvent {
    position: ppqn;
    value: unitValue;
    interpolation: Interpolation;
    index: int;
    constructor(props?: Partial<ValueEvent>);
}
//# sourceMappingURL=ValueEventImpl.d.ts.map