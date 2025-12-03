import { Notifier, Observer, Subscription, Terminable } from "@naomiarotest/lib-std";
import { BoxAdaptersContext } from "../BoxAdaptersContext";
import { EventCollection } from "@naomiarotest/lib-dsp";
import { MarkerBoxAdapter } from "./MarkerBoxAdapter";
import { MarkerTrack } from "@naomiarotest/studio-boxes";
export declare class MarkerTrackAdapter implements Terminable {
    #private;
    readonly changeNotifier: Notifier<void>;
    constructor(context: BoxAdaptersContext, object: MarkerTrack);
    subscribe(observer: Observer<void>): Subscription;
    get context(): BoxAdaptersContext;
    get enabled(): boolean;
    get events(): EventCollection<MarkerBoxAdapter>;
    get object(): MarkerTrack;
    dispatchChange(): void;
    onSortingChanged(): void;
    terminate(): void;
}
//# sourceMappingURL=MarkerTrackAdapter.d.ts.map