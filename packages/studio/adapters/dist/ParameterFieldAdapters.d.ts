import { Option, Terminable } from "@naomiarotest/lib-std";
import { Address } from "@naomiarotest/lib-box";
import { AutomatableParameterFieldAdapter } from "./AutomatableParameterFieldAdapter";
export declare class ParameterFieldAdapters {
    #private;
    constructor();
    register(adapter: AutomatableParameterFieldAdapter): Terminable;
    get(address: Address): AutomatableParameterFieldAdapter;
    opt(address: Address): Option<AutomatableParameterFieldAdapter>;
}
//# sourceMappingURL=ParameterFieldAdapters.d.ts.map