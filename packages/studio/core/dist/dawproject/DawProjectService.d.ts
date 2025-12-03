import { Option } from "@naomiarotest/lib-std";
import { ProjectSkeleton } from "@naomiarotest/studio-adapters";
import { ProjectProfile } from "../project";
import { SampleService } from "../samples";
export declare class DawProjectService {
    readonly sampleService: SampleService;
    constructor(sampleService: SampleService);
    importDawproject(): Promise<Option<ProjectSkeleton>>;
    exportDawproject(profile: ProjectProfile): Promise<void>;
}
//# sourceMappingURL=DawProjectService.d.ts.map