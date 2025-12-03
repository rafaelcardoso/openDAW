import { Procedure, unitValue, UUID } from "@naomiarotest/lib-std";
import { AudioData, Sample, SampleMetaData } from "@naomiarotest/studio-adapters";
import { SampleAPI } from "@naomiarotest/studio-core";
export declare class OpenSampleAPI implements SampleAPI {
    static readonly ApiRoot = "https://api.opendaw.studio/samples";
    static readonly FileRoot = "https://assets.opendaw.studio/samples";
    static get(): OpenSampleAPI;
    static fromAudioBuffer(buffer: AudioBuffer): AudioData;
    private constructor();
    all(): Promise<ReadonlyArray<Sample>>;
    get(uuid: UUID.Bytes): Promise<Sample>;
    load(context: AudioContext, uuid: UUID.Bytes, progress: Procedure<unitValue>): Promise<[AudioData, Sample]>;
    upload(arrayBuffer: ArrayBuffer, metaData: SampleMetaData): Promise<void>;
    allowsUpload(): boolean;
}
//# sourceMappingURL=OpenSampleAPI.d.ts.map