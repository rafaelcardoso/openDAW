import { Attempt } from "@naomiarotest/lib-std";
import { AudioUnitBox } from "@naomiarotest/studio-boxes";
import { ProjectSkeleton } from "../project/ProjectSkeleton";
export declare namespace PresetDecoder {
    const decode: (bytes: ArrayBufferLike, target: ProjectSkeleton) => void;
    const replaceAudioUnit: (arrayBuffer: ArrayBuffer, targetAudioUnitBox: AudioUnitBox, options?: {
        keepMIDIEffects?: boolean;
        keepAudioEffects?: boolean;
    }) => Attempt<void, string>;
}
//# sourceMappingURL=PresetDecoder.d.ts.map