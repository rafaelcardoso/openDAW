import { NoteTrackImpl } from "./impl";
import { AudioUnitBox } from "@naomiarotest/studio-boxes";
import { BoxGraph } from "@naomiarotest/lib-box";
import { IndexRef } from "./IndexRef";
export declare class NoteTrackWriter {
    #private;
    write(boxGraph: BoxGraph, audioUnitBox: AudioUnitBox, noteTracks: ReadonlyArray<NoteTrackImpl>, indexRef: IndexRef): void;
}
//# sourceMappingURL=NoteTrackWriter.d.ts.map