import { Model } from "pinia-orm";

export class HistoricalLocation extends Model {
    static override entity = "HistoricalLocations";

    static override fields() {
        return {
            id: this.uid(),
            "@iot.id": this.attr(null),
            "@iot.selfLink": this.attr(""),
            "Locations@iot.navigationLink": this.attr(""),
            "Thing@iot.navigationLink": this.attr(""),
            time: this.attr("")
        }
    }
}