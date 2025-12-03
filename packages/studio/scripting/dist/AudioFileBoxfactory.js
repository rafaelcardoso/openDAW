import { AudioFileBox } from "@naomiarotest/studio-boxes";
import { UUID } from "@naomiarotest/lib-std";
export var AudioFileBoxfactory;
(function (AudioFileBoxfactory) {
    AudioFileBoxfactory.create = (boxGraph, sample) => AudioFileBox.create(boxGraph, UUID.parse(sample.uuid), box => {
        box.fileName.setValue(sample.name);
        box.startInSeconds.setValue(0);
        box.endInSeconds.setValue(sample.duration);
    });
})(AudioFileBoxfactory || (AudioFileBoxfactory = {}));
