import { Terminable } from "@naomiarotest/lib-std";
import { Messenger } from "@naomiarotest/lib-runtime";
import { BoxGraph } from "./graph";
export declare class SyncSource<M> implements Terminable {
    #private;
    static readonly DEBUG_CHECKSUM = false;
    constructor(graph: BoxGraph<M>, messenger: Messenger, initialize?: boolean);
    checksum(value: Int8Array): Promise<void>;
    terminate(): void;
}
//# sourceMappingURL=sync-source.d.ts.map