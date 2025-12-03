import { Box, BoxGraph } from "@naomiarotest/lib-box";
import { BoxIO } from "@naomiarotest/studio-boxes";
import { DeviceBox } from "@naomiarotest/studio-adapters";
export declare namespace DeviceIO {
    const exportDevice: (box: Box) => ArrayBufferLike;
    const importDevice: (boxGraph: BoxGraph<BoxIO.TypeMap>, buffer: ArrayBufferLike) => DeviceBox;
}
//# sourceMappingURL=DeviceIO.d.ts.map