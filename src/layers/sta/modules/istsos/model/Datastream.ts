import { Model } from "pinia-orm";

export class Datastream extends Model {
    static override entity = "Datastreams";

    static override fields() {
        return {
            id: this.uid(),
            "@iot.id": this.attr(null),
            "@iot.selfLink": this.attr(""),
            "Thing@iot.navigationLink": this.attr(""),
            "Sensor@iot.navigationLink": this.attr(""),
            "ObservedProperty@iot.navigationLink": this.attr(""),
            "Observations@iot.navigationLink": this.attr(""),
            name: this.attr(""),
            description: this.attr(""),
            unitOfMeasurement: this.attr(null),
            observationType: this.attr(""),
            observedArea: this.attr(null),
            phenomenonTime: this.attr(""),
            resultTime: this.attr(null),
            properties: this.attr(null),
        }
    }
}

