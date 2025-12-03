import { Address, BooleanField, StringField } from "@naomiarotest/lib-box";
import { Observer, Subscription, UUID } from "@naomiarotest/lib-std";
import { AudioBusBox } from "@naomiarotest/studio-boxes";
import { DeviceBoxAdapter, DeviceHost } from "../DeviceAdapter";
import { BoxAdaptersContext } from "../BoxAdaptersContext";
import { AudioUnitBoxAdapter } from "./AudioUnitBoxAdapter";
import { IconSymbol } from "@naomiarotest/studio-enums";
export declare class AudioBusBoxAdapter implements DeviceBoxAdapter {
    #private;
    readonly type = "bus";
    readonly accepts = "audio";
    constructor(context: BoxAdaptersContext, box: AudioBusBox);
    catchupAndSubscribe(observer: Observer<this>): Subscription;
    get uuid(): UUID.Bytes;
    get address(): Address;
    get box(): AudioBusBox;
    get enabledField(): BooleanField;
    get minimizedField(): BooleanField;
    get iconField(): StringField;
    get labelField(): StringField;
    get colorField(): StringField;
    get iconSymbol(): IconSymbol;
    deviceHost(): DeviceHost;
    audioUnitBoxAdapter(): AudioUnitBoxAdapter;
    terminate(): void;
    toString(): string;
}
//# sourceMappingURL=AudioBusBoxAdapter.d.ts.map