import { AudioUnitBox } from "@naomiarotest/studio-boxes";
import { BoxGraph } from "@naomiarotest/lib-box";
import { IndexRef } from "./IndexRef";
import { AudioTrackImpl } from "./impl/AudioTrackImpl";
export declare namespace AudioTrackWriter {
    const write: (boxGraph: BoxGraph, audioUnitBox: AudioUnitBox, audioTracks: ReadonlyArray<AudioTrackImpl>, indexRef: IndexRef) => void;
}
//# sourceMappingURL=AudioTrackWriter.d.ts.map