import { Box, BoxGraph } from "@naomiarotest/lib-box";
import { AudioUnitBox } from "@naomiarotest/studio-boxes";
import { AudioEffects } from "./Api";
export declare class AudioEffectFactory {
    static write(boxGraph: BoxGraph, audioUnitBox: AudioUnitBox, effect: Required<AudioEffects[keyof AudioEffects]>): Box;
}
//# sourceMappingURL=AudioEffectFactory.d.ts.map