import { Observer, Option, Subscription, Terminable } from "@naomiarotest/lib-std";
import { PointerField } from "@naomiarotest/lib-box";
import { Pointers } from "@naomiarotest/studio-enums";
import { BoxAdapters } from "../BoxAdapters";
import { AudioBusBoxAdapter } from "./AudioBusBoxAdapter";
export declare class AudioUnitOutput implements Terminable {
    #private;
    constructor(pointerField: PointerField<Pointers.AudioOutput>, boxAdapters: BoxAdapters);
    subscribe(observer: Observer<Option<AudioBusBoxAdapter>>): Subscription;
    catchupAndSubscribe(observer: Observer<Option<AudioBusBoxAdapter>>): Subscription;
    get adapter(): Option<AudioBusBoxAdapter>;
    terminate(): void;
}
//# sourceMappingURL=AudioUnitOutput.d.ts.map