import { Pointers } from "@naomiarotest/studio-enums";
import { UUID } from "@naomiarotest/lib-std";
import { Address, BooleanField, Int32Field, PointerField, StringField } from "@naomiarotest/lib-box";
import { PitchDeviceBox } from "@naomiarotest/studio-boxes";
import { DeviceHost, MidiEffectDeviceAdapter } from "../../DeviceAdapter";
import { BoxAdaptersContext } from "../../BoxAdaptersContext";
import { AudioUnitBoxAdapter } from "../../audio-unit/AudioUnitBoxAdapter";
export declare class PitchDeviceBoxAdapter implements MidiEffectDeviceAdapter {
    #private;
    readonly type = "midi-effect";
    readonly accepts = "midi";
    readonly namedParameter: {
        readonly octaves: import("../..").AutomatableParameterFieldAdapter<number>;
        readonly semiTones: import("../..").AutomatableParameterFieldAdapter<number>;
        readonly cent: import("../..").AutomatableParameterFieldAdapter<number>;
    };
    constructor(context: BoxAdaptersContext, box: PitchDeviceBox);
    get box(): PitchDeviceBox;
    get uuid(): UUID.Bytes;
    get address(): Address;
    get indexField(): Int32Field;
    get labelField(): StringField;
    get enabledField(): BooleanField;
    get minimizedField(): BooleanField;
    get host(): PointerField<Pointers.MidiEffectHost>;
    deviceHost(): DeviceHost;
    audioUnitBoxAdapter(): AudioUnitBoxAdapter;
    terminate(): void;
}
//# sourceMappingURL=PitchDeviceBoxAdapter.d.ts.map