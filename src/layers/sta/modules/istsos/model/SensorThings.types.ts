import type { Constructor, Model } from "pinia-orm";
import { Datastream } from "./Datastream";
import type { FeatureOfInterest } from "./FeatureOfInterest";
import type { Observation } from "./Observation";
import type { Sensor } from "./Sensor";
import type { Thing } from "./Thing";
import type { Location } from "./Location";
import type { HistoricalLocation } from "./HistoricalLocation";
import type { ObservedProperty } from "./ObservedProperty";

export type StaEntityType = 
Observation | Datastream | FeatureOfInterest | 
Thing | Sensor | Location | HistoricalLocation |
ObservedProperty;
