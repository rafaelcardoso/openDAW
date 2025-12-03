import { Api, Project } from "../Api";
import { ScriptHostProtocol } from "../ScriptHostProtocol";
import { AudioData, Sample } from "@naomiarotest/studio-adapters";
export declare class ApiImpl implements Api {
    #private;
    constructor(protocol: ScriptHostProtocol);
    newProject(name?: string): Project;
    getProject(): Promise<Project>;
    openProject(buffer: ArrayBufferLike, name?: string): void;
    addSample(data: AudioData, name: string): Promise<Sample>;
}
//# sourceMappingURL=ApiImpl.d.ts.map