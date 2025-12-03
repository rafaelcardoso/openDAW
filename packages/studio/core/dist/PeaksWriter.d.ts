import { Peaks } from "@naomiarotest/lib-fusion";
import { int, Nullable } from "@naomiarotest/lib-std";
export declare class PeaksWriter implements Peaks, Peaks.Stage {
    #private;
    readonly numChannels: int;
    readonly data: Array<Int32Array>;
    readonly stages: ReadonlyArray<Peaks.Stage>;
    readonly dataOffset: int;
    readonly shift: int;
    readonly dataIndex: Int32Array;
    constructor(numChannels: int);
    set numFrames(value: int);
    get numFrames(): int;
    get numPeaks(): int;
    unitsEachPeak(): int;
    append(frames: ReadonlyArray<Float32Array>): void;
    nearest(_unitsPerPixel: number): Nullable<Peaks.Stage>;
}
//# sourceMappingURL=PeaksWriter.d.ts.map