import { int } from "@naomiarotest/lib-std";
export declare namespace WavFile {
    type Audio = {
        channels: ReadonlyArray<Float32Array>;
        sampleRate: number;
        numFrames: number;
    };
    const decodeFloats: (buffer: ArrayBuffer) => Audio;
    const encodeFloats: (audio: Audio | AudioBuffer, maxLength?: int) => ArrayBuffer;
}
//# sourceMappingURL=WavFile.d.ts.map