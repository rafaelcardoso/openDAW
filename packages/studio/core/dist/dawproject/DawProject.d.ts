import { UUID } from "@naomiarotest/lib-std";
import { MetaDataSchema, ProjectSchema } from "@naomiarotest/lib-dawproject";
import { ProjectSkeleton, SampleLoaderManager } from "@naomiarotest/studio-adapters";
export declare namespace DawProject {
    type Resource = {
        uuid: UUID.Bytes;
        path: string;
        name: string;
        buffer: ArrayBuffer;
    };
    interface ResourceProvider {
        fromPath(path: string): Resource;
        fromUUID(uuid: UUID.Bytes): Resource;
    }
    const decode: (buffer: ArrayBuffer | Buffer<ArrayBuffer>) => Promise<{
        metaData: MetaDataSchema;
        project: ProjectSchema;
        resources: ResourceProvider;
    }>;
    const encode: (skeleton: ProjectSkeleton, sampleManager: SampleLoaderManager, metaData: MetaDataSchema) => Promise<ArrayBuffer>;
}
//# sourceMappingURL=DawProject.d.ts.map