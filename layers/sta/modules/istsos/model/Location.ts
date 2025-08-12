import { Model } from "pinia-orm";

export class Location extends Model {
    static override entity = "Locations";

    static override fields() {
        return {
            id: this.uid(),
            "@iot.id": this.attr(null),
            "@iot.selfLink": this.attr(""),
            "Things@iot.navigationLink": this.attr(""),
            "HistoricalLocations@iot.navigationLink": this.attr(""),
            name: this.attr(""),
            description: this.attr(""),
            encodingType: this.attr(""),
            location: this.attr(null),
            properties: this.attr(null),
        }
    }
}