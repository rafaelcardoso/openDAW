import { LiveStreamBroadcaster } from "@naomiarotest/lib-fusion";
import { Address } from "@naomiarotest/lib-box";
import { int, Terminable } from "@naomiarotest/lib-std";
export declare class NoteBroadcaster implements Terminable {
    #private;
    constructor(broadcaster: LiveStreamBroadcaster, address: Address);
    noteOn(note: int): void;
    noteOff(note: int): void;
    reset(): void;
    clear(): void;
    terminate(): void;
    toString(): string;
}
//# sourceMappingURL=NoteBroadcaster.d.ts.map