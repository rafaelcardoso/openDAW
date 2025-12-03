import { Address } from "@naomiarotest/lib-box";
import { GrooveShuffleBox } from "@naomiarotest/studio-boxes";
import { int, UUID } from "@naomiarotest/lib-std";
import { ppqn } from "@naomiarotest/lib-dsp";
import { GrooveAdapter } from "./GrooveBoxAdapter";
import { BoxAdaptersContext } from "../BoxAdaptersContext";
export declare class GrooveShuffleBoxAdapter implements GrooveAdapter {
    #private;
    static readonly Durations: ReadonlyArray<[int, int]>;
    static readonly DurationPPQNs: ReadonlyArray<int>;
    static readonly DurationStrings: ReadonlyArray<string>;
    readonly type = "groove-adapter";
    readonly namedParameter: {
        readonly duration: import("..").AutomatableParameterFieldAdapter<number>;
        readonly amount: import("..").AutomatableParameterFieldAdapter<number>;
    };
    constructor(context: BoxAdaptersContext, box: GrooveShuffleBox);
    unwarp(position: ppqn): ppqn;
    warp(position: ppqn): ppqn;
    get box(): GrooveShuffleBox;
    get uuid(): UUID.Bytes;
    get address(): Address;
    terminate(): void;
}
//# sourceMappingURL=GrooveShuffleBoxAdapter.d.ts.map