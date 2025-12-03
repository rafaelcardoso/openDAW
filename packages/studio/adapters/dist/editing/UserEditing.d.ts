import { Observer, Option, Subscription, Terminable } from "@naomiarotest/lib-std";
import { BoxEditing, PointerField, Vertex } from "@naomiarotest/lib-box";
import { Pointers } from "@naomiarotest/studio-enums";
export declare class UserEditing implements Terminable {
    #private;
    constructor(editing: BoxEditing);
    catchupAndSubscribe(observer: Observer<Option<Vertex>>): Subscription;
    follow(pointer: PointerField<Pointers.Editing>): void;
    edit(target: Vertex<Pointers.Editing | Pointers>): void;
    isEditing(vertex: Vertex<Pointers.Editing | Pointers>): boolean;
    get(): Option<Vertex>;
    clear(): void;
    terminate(): void;
}
//# sourceMappingURL=UserEditing.d.ts.map