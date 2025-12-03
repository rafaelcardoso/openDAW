import { Procedure, Progress, UUID } from "@naomiarotest/lib-std";
import { Sample } from "@naomiarotest/studio-adapters";
import { CloudHandler } from "./CloudHandler";
export declare class CloudBackupSamples {
    #private;
    static readonly RemotePath = "samples";
    static readonly RemoteCatalogPath: string;
    static readonly areSamplesEqual: ({ uuid: a }: Sample, { uuid: b }: Sample) => boolean;
    static pathFor(uuid: UUID.String): string;
    static start(cloudHandler: CloudHandler, progress: Progress.Handler, log: Procedure<string>): Promise<void>;
    private constructor();
}
//# sourceMappingURL=CloudBackupSamples.d.ts.map