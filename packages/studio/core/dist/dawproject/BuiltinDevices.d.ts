import { int } from "@naomiarotest/lib-std";
import { BoxGraph, Field } from "@naomiarotest/lib-box";
import { EqualizerSchema } from "@naomiarotest/lib-dawproject";
import { Pointers } from "@naomiarotest/studio-enums";
import { RevampDeviceBox } from "@naomiarotest/studio-boxes";
export declare namespace BuiltinDevices {
    const equalizer: (boxGraph: BoxGraph, equalizer: EqualizerSchema, field: Field<Pointers.MidiEffectHost> | Field<Pointers.AudioEffectHost>, index: int) => RevampDeviceBox;
}
//# sourceMappingURL=BuiltinDevices.d.ts.map