import { AudioUnitType, IconSymbol } from "@naomiarotest/studio-enums";
import { AudioBusBox } from "@naomiarotest/studio-boxes";
import { Color } from "@naomiarotest/lib-std";
import { ProjectSkeleton } from "../project/ProjectSkeleton";
export declare namespace AudioBusFactory {
    const create: (skeleton: ProjectSkeleton, name: string, icon: IconSymbol, type: AudioUnitType, color: Color) => AudioBusBox;
}
//# sourceMappingURL=AudioBusFactory.d.ts.map