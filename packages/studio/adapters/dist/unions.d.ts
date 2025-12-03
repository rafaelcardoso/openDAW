import { AudioClipBox, AudioRegionBox, NoteClipBox, NoteRegionBox, ValueClipBox, ValueRegionBox } from "@naomiarotest/studio-boxes";
import { Box } from "@naomiarotest/lib-box";
export type AnyClipBox = NoteClipBox | ValueClipBox | AudioClipBox;
export type AnyRegionBox = AudioRegionBox | NoteRegionBox | ValueRegionBox;
export type AnyLoopableRegionBox = AnyRegionBox;
export declare const UnionBoxTypes: {
    isClipBox: (box: Box) => box is AnyClipBox;
    isRegionBox: (box: Box) => box is AnyRegionBox;
    asRegionBox: (box: Box) => AnyRegionBox;
    isLoopableRegionBox: (box: Box) => box is AnyLoopableRegionBox;
};
//# sourceMappingURL=unions.d.ts.map