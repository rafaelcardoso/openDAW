import { Comparator, int, Option, UUID } from "@naomiarotest/lib-std";
import { Address } from "@naomiarotest/lib-box";
import { Event } from "@naomiarotest/lib-dsp";
import { MarkerBox } from "@naomiarotest/studio-boxes";
import { BoxAdapter } from "../BoxAdapter";
import { BoxAdaptersContext } from "../BoxAdaptersContext";
import { MarkerTrackAdapter } from "./MarkerTrackAdapter";
export declare class MarkerBoxAdapter implements BoxAdapter, Event {
    #private;
    static readonly Comparator: Comparator<MarkerBoxAdapter>;
    readonly type = "marker-event";
    constructor(context: BoxAdaptersContext, box: MarkerBox);
    get box(): MarkerBox;
    get uuid(): UUID.Bytes;
    get address(): Address;
    get position(): int;
    get plays(): int;
    get hue(): int;
    get label(): string;
    get trackAdapter(): Option<MarkerTrackAdapter>;
    terminate(): void;
    toString(): string;
}
//# sourceMappingURL=MarkerBoxAdapter.d.ts.map