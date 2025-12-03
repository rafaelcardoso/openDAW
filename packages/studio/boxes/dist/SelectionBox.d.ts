import { Maybe, UUID, Procedure } from "@naomiarotest/lib-std";
import { Box, BoxGraph, PointerField, UnreferenceableType } from "@naomiarotest/lib-box";
import { BoxVisitor } from ".";
import { Pointers } from "@naomiarotest/studio-enums";
export type SelectionBoxFields = {
    1: PointerField<Pointers.Selection>;
    2: PointerField<Pointers.Selection>;
};
export declare class SelectionBox extends Box<UnreferenceableType, SelectionBoxFields> {
    static create(graph: BoxGraph, uuid: UUID.Bytes, constructor?: Procedure<SelectionBox>): SelectionBox;
    static readonly ClassName: string;
    private constructor();
    accept<R>(visitor: BoxVisitor<R>): Maybe<R>;
    get selection(): PointerField<Pointers.Selection>;
    get selectable(): PointerField<Pointers.Selection>;
    initializeFields(): SelectionBoxFields;
}
//# sourceMappingURL=SelectionBox.d.ts.map