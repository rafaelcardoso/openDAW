import { Pointers } from "@naomiarotest/studio-enums";
import { Observer, Subscription, UUID } from "@naomiarotest/lib-std";
import { Address, BooleanField, Int32Field, PointerField, StringField } from "@naomiarotest/lib-box";
import { ZeitgeistDeviceBox } from "@naomiarotest/studio-boxes";
import { DeviceHost, MidiEffectDeviceAdapter } from "../../DeviceAdapter";
import { BoxAdaptersContext } from "../../BoxAdaptersContext";
import { GrooveAdapter } from "../../grooves/GrooveBoxAdapter";
import { AudioUnitBoxAdapter } from "../../audio-unit/AudioUnitBoxAdapter";
export declare class ZeitgeistDeviceBoxAdapter implements MidiEffectDeviceAdapter {
    #private;
    readonly type = "midi-effect";
    readonly accepts = "midi";
    constructor(context: BoxAdaptersContext, box: ZeitgeistDeviceBox);
    get box(): ZeitgeistDeviceBox;
    get uuid(): UUID.Bytes;
    get address(): Address;
    get indexField(): Int32Field;
    get labelField(): StringField;
    get enabledField(): BooleanField;
    get minimizedField(): BooleanField;
    get host(): PointerField<Pointers.MidiEffectHost>;
    deviceHost(): DeviceHost;
    groove(): GrooveAdapter;
    catchupAndSubscribeGroove(observer: Observer<GrooveAdapter>): Subscription;
    audioUnitBoxAdapter(): AudioUnitBoxAdapter;
    terminate(): void;
}
//# sourceMappingURL=ZeitgeistDeviceBoxAdapter.d.ts.map