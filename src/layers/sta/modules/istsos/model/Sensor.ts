import { Model } from "pinia-orm";

export class Sensor extends Model {
    static override entity = "Sensors";

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