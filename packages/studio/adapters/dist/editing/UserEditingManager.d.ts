import { Terminable } from "@naomiarotest/lib-std";
import { BoxEditing } from "@naomiarotest/lib-box";
import { UserInterfaceBox } from "@naomiarotest/studio-boxes";
import { UserEditing } from "./UserEditing";
export declare class UserEditingManager implements Terminable {
    #private;
    constructor(editing: BoxEditing);
    follow(userInterfaceBox: UserInterfaceBox): void;
    get modularSystem(): UserEditing;
    get timeline(): UserEditing;
    get audioUnit(): UserEditing;
    terminate(): void;
}
//# sourceMappingURL=UserEditingManager.d.ts.map