import { Observer, Option, Subscription, Terminable } from "@naomiarotest/lib-std";
import { AudioUnitBox, CaptureMidiBox } from "@naomiarotest/studio-boxes";
import { NoteSignal } from "@naomiarotest/studio-adapters";
import { Capture } from "./Capture";
import { CaptureDevices } from "./CaptureDevices";
export declare class CaptureMidi extends Capture<CaptureMidiBox> {
    #private;
    constructor(manager: CaptureDevices, audioUnitBox: AudioUnitBox, captureMidiBox: CaptureMidiBox);
    notify(signal: NoteSignal): void;
    subscribeNotes(observer: Observer<NoteSignal>): Subscription;
    get label(): string;
    get deviceLabel(): Option<string>;
    prepareRecording(): Promise<void>;
    startRecording(): Terminable;
}
//# sourceMappingURL=CaptureMidi.d.ts.map