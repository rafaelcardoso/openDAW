import { Func, int, Subscription, Terminable } from "@naomiarotest/lib-std";
import { Box, PointerHub } from "@naomiarotest/lib-box";
import { Pointers } from "@naomiarotest/studio-enums";
import { BoxAdapter } from "./BoxAdapter";
export interface AdapterCollectionListener<ADAPTER extends BoxAdapter> {
    onAdd(adapter: ADAPTER): void;
    onRemove(adapter: ADAPTER): void;
}
export declare class BoxAdapterCollection<ADAPTER extends BoxAdapter> implements Terminable {
    #private;
    constructor(pointerHub: PointerHub, provider: Func<Box, ADAPTER>, pointers: Pointers);
    subscribe(listener: AdapterCollectionListener<ADAPTER>): Subscription;
    catchupAndSubscribe(listener: AdapterCollectionListener<ADAPTER>): Subscription;
    adapters(): ReadonlyArray<ADAPTER>;
    size(): int;
    isEmpty(): boolean;
    terminate(): void;
}
//# sourceMappingURL=BoxAdapterCollection.d.ts.map