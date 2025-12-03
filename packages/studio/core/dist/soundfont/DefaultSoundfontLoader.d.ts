import { Observer, Option, Subscription, UUID } from "@naomiarotest/lib-std";
import { SoundfontLoader, SoundfontLoaderState, SoundfontMetaData } from "@naomiarotest/studio-adapters";
import { DefaultSoundfontLoaderManager } from "./DefaultSoundfontLoaderManager";
import type { SoundFont2 } from "soundfont2";
export declare class DefaultSoundfontLoader implements SoundfontLoader {
    #private;
    constructor(manager: DefaultSoundfontLoaderManager, uuid: UUID.Bytes);
    subscribe(observer: Observer<SoundfontLoaderState>): Subscription;
    invalidate(): void;
    get uuid(): UUID.Bytes;
    get soundfont(): Option<SoundFont2>;
    get meta(): Option<SoundfontMetaData>;
    get state(): SoundfontLoaderState;
    toString(): string;
}
//# sourceMappingURL=DefaultSoundfontLoader.d.ts.map