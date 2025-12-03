import { FileReferenceSchema, ProjectSchema } from "@naomiarotest/lib-dawproject";
import { ProjectSkeleton, SampleLoaderManager } from "@naomiarotest/studio-adapters";
export declare namespace DawProjectExporter {
    interface ResourcePacker {
        write(path: string, buffer: ArrayBufferLike): FileReferenceSchema;
    }
    const write: (skeleton: ProjectSkeleton, sampleManager: SampleLoaderManager, resourcePacker: ResourcePacker) => ProjectSchema;
}
//# sourceMappingURL=DawProjectExporter.d.ts.map