import { int, Option, Progress } from "@naomiarotest/lib-std";
import { ExportStemsConfiguration } from "@naomiarotest/studio-adapters";
import { Project } from "./project";
export declare namespace AudioOfflineRenderer {
    const start: (source: Project, optExportConfiguration: Option<ExportStemsConfiguration>, progress: Progress.Handler, abortSignal?: AbortSignal, sampleRate?: int) => Promise<AudioBuffer>;
}
//# sourceMappingURL=AudioOfflineRenderer.d.ts.map