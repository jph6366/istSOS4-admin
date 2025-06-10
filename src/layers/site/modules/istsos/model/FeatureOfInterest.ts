import { Model } from "pinia-orm";
import { type Point } from "geojson";

export class featureOfInterest extends Model {
    id!: number;
    iotSelfLink!: string;
    observationsNavigationLink!: string;
    name!: string; 
    description!: string;
    encodingType!: string; // ValueCode application/geo+json
    // a thing can be geo-referenced using different space models
    // specialized extensions of GML: CityGML, SensorML, IndoorML, .etc.
    feature!: Point;
    properties!: JSON


}