import { Option } from "@naomiarotest/lib-std";
import { Messenger } from "@naomiarotest/lib-runtime";
import type { OpfsProtocol, SamplePeakProtocol } from "@naomiarotest/lib-fusion";
export declare class Workers {
    static install(url: string): Promise<void>;
    static messenger: Option<Messenger>;
    static get Peak(): SamplePeakProtocol;
    static get Opfs(): OpfsProtocol;
}
//# sourceMappingURL=Workers.d.ts.map