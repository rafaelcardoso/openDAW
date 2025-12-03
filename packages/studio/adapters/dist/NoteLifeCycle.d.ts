import { byte, Procedure, Terminable, unitValue, UUID } from "@naomiarotest/lib-std";
import { NoteSignal } from "./NoteSignal";
export declare namespace NoteLifeCycle {
    const start: (send: Procedure<NoteSignal>, uuid: UUID.Bytes, pitch: byte, velocity?: unitValue) => Terminable;
}
//# sourceMappingURL=NoteLifeCycle.d.ts.map