import { Model } from "pinia-orm";
export class FeatureOfInterest extends Model {
  static override entity = "FeaturesOfInterest";

  static override fields() {
    return {
      id: this.uid(), // Pinia ORM's own ID
      "@iot.id": this.attr(null), // The ID from the IoT service
      "@iot.selfLink": this.attr(""),
      "Observations@iot.navigationLink": this.attr(""),
      name: this.attr(""),
      description: this.attr(""),
      encodingType: this.attr(""),// ValueCode application/geo+json
    // a thing can be geo-referenced using different space models
            // specialized extensions of GML: CityGML, SensorML, IndoorML, .etc.
      feature: this.attr(null),
      properties: this.attr(null),
    };
  }
}
