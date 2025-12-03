import "@naomiarotest/lib-std";
import { ObjectField, FieldConstruct, Field, UnreferenceableType } from "@naomiarotest/lib-box";
import { Pointers } from "@naomiarotest/studio-enums";
export type DeviceUserInterfaceFields = {
    1: Field<Pointers.DeviceUserInterface>;
};
export declare class DeviceUserInterface extends ObjectField<DeviceUserInterfaceFields> {
    static create(construct: FieldConstruct<UnreferenceableType>): DeviceUserInterface;
    private constructor();
    get elements(): Field<Pointers.DeviceUserInterface>;
    initializeFields(): DeviceUserInterfaceFields;
}
//# sourceMappingURL=DeviceUserInterface.d.ts.map