import { Model } from "pinia-orm";
import { Datastream } from "./Datastream";
import { FeatureOfInterest } from "./FeatureOfInterest";

export class Observation extends Model {
    static override entity = "Observations";

    static override fields() {
        return {
            id: this.uid(),
            "@iot.id": this.attr(null),
            "@iot.selfLink": this.attr(""),
            "FeatureOfInterest@iot.navigationLink": this.attr(""),
            "Datastream@iot.navigationLink": this.attr(""),
            phenomenonTime: this.attr(""),
            resultTime: this.attr(null),
            result: this.attr(null),
            resultQuality: this.attr(null),
            validTime: this.attr(null),
            parameters: this.attr(null),
            Datastream: this.hasOne(Datastream, "@iot.selfLink", "@iot.selfLink" ),
            FeatureOfInterest: this.hasOne(FeatureOfInterest, "@iot.selfLink", "@iot.selfLink" )
        }
    }
}
