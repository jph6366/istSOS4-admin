import { Model } from "pinia-orm";

export class Thing extends Model {
    static override entity = "Things";

    static override fields() {
        return {
            id: this.uid(),
            "@iot.id": this.attr(null),
            "@iot.selfLink": this.attr(""),
            "Datastreams@iot.navigationLink": this.attr(""),
            name: this.attr(""),
            description: this.attr(""),
            encodingType: this.attr(""),
            metadata: this.attr(""),
            properties: this.attr(null),
        }
    }
}