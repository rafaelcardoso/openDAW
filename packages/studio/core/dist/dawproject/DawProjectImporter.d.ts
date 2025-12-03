import { UUID } from "@naomiarotest/lib-std";
import { ProjectSchema } from "@naomiarotest/lib-dawproject";
import { ProjectSkeleton } from "@naomiarotest/studio-adapters";
import { DawProject } from "./DawProject";
export declare namespace DawProjectImport {
    type Result = {
        audioIds: ReadonlyArray<UUID.Bytes>;
        skeleton: ProjectSkeleton;
    };
    const read: (schema: ProjectSchema, resources: DawProject.ResourceProvider) => Promise<Result>;
}
//# sourceMappingURL=DawProjectImporter.d.ts.map