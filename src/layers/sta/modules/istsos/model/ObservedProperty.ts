import { Model } from "pinia-orm";

export class ObservedProperty extends Model {
    static override entity = "ObservedProperties";

    static override fields() {
        return {
            id: this.uid(),
            "@iot.id": this.attr(null),
            "@iot.selfLink": this.attr(""),
            "Datastreams@iot.navigationLink": this.attr(""),
            name: this.attr(""),
            description: this.attr(""),
            definition: this.attr(""),
            properties: this.attr(null),
        }
    }
}