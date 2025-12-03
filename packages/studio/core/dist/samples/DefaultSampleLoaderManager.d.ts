import { Progress, UUID } from "@naomiarotest/lib-std";
import { SampleProvider } from "./SampleProvider";
import { AudioData, SampleLoader, SampleLoaderManager, SampleMetaData } from "@naomiarotest/studio-adapters";
export declare class DefaultSampleLoaderManager implements SampleLoaderManager, SampleProvider {
    #private;
    constructor(provider: SampleProvider);
    fetch(uuid: UUID.Bytes, progress: Progress.Handler): Promise<[AudioData, SampleMetaData]>;
    remove(uuid: UUID.Bytes): void;
    invalidate(uuid: UUID.Bytes): void;
    record(loader: SampleLoader): void;
    getOrCreate(uuid: UUID.Bytes): SampleLoader;
}
//# sourceMappingURL=DefaultSampleLoaderManager.d.ts.map