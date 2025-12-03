import { ObservableOption, UUID } from "@naomiarotest/lib-std";
import { MIDIOutputBox, MIDIOutputDeviceBox } from "@naomiarotest/studio-boxes";
import { Address, BooleanField, StringField } from "@naomiarotest/lib-box";
import { DeviceHost, InstrumentDeviceBoxAdapter } from "../../DeviceAdapter";
import { BoxAdaptersContext } from "../../BoxAdaptersContext";
import { ParameterAdapterSet } from "../../ParameterAdapterSet";
import { TrackType } from "../../timeline/TrackType";
import { AudioUnitBoxAdapter } from "../../audio-unit/AudioUnitBoxAdapter";
export declare class MIDIOutputDeviceBoxAdapter implements InstrumentDeviceBoxAdapter {
    #private;
    readonly type = "instrument";
    readonly accepts = "midi";
    constructor(context: BoxAdaptersContext, box: MIDIOutputDeviceBox);
    get box(): MIDIOutputDeviceBox;
    get uuid(): UUID.Bytes;
    get address(): Address;
    get labelField(): StringField;
    get iconField(): StringField;
    get defaultTrackType(): TrackType;
    get enabledField(): BooleanField;
    get minimizedField(): BooleanField;
    get acceptsMidiEvents(): boolean;
    get parameters(): ParameterAdapterSet;
    get midiDevice(): ObservableOption<MIDIOutputBox>;
    deviceHost(): DeviceHost;
    audioUnitBoxAdapter(): AudioUnitBoxAdapter;
    terminate(): void;
}
//# sourceMappingURL=MIDIOutputDeviceBoxAdapter.d.ts.map