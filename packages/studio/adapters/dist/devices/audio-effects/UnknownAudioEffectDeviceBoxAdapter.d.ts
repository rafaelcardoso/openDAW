import { UUID } from "@naomiarotest/lib-std";
import { Address, BooleanField, Int32Field, PointerField, StringField } from "@naomiarotest/lib-box";
import { Pointers } from "@naomiarotest/studio-enums";
import { UnknownAudioEffectDeviceBox } from "@naomiarotest/studio-boxes";
import { BoxAdaptersContext } from "../../BoxAdaptersContext";
import { AudioUnitBoxAdapter } from "../../audio-unit/AudioUnitBoxAdapter";
import { AudioEffectDeviceAdapter, DeviceHost } from "../../DeviceAdapter";
export declare class UnknownAudioEffectDeviceBoxAdapter implements AudioEffectDeviceAdapter {
    #private;
    readonly type = "audio-effect";
    readonly accepts = "audio";
    constructor(context: BoxAdaptersContext, box: UnknownAudioEffectDeviceBox);
    get box(): UnknownAudioEffectDeviceBox;
    get uuid(): UUID.Bytes;
    get address(): Address;
    get indexField(): Int32Field;
    get labelField(): StringField;
    get enabledField(): BooleanField;
    get minimizedField(): BooleanField;
    get host(): PointerField<Pointers.AudioEffectHost>;
    get commentField(): StringField;
    deviceHost(): DeviceHost;
    audioUnitBoxAdapter(): AudioUnitBoxAdapter;
    terminate(): void;
}
//# sourceMappingURL=UnknownAudioEffectDeviceBoxAdapter.d.ts.map