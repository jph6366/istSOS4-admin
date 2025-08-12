import { Datastream } from "~/layers/sta/modules/istsos/model/Datastream"
import { FeatureOfInterest } from "~/layers/sta/modules/istsos/model/FeatureOfInterest"
import { HistoricalLocation } from "~/layers/sta/modules/istsos/model/HistoricalLocation"
import { Observation } from "~/layers/sta/modules/istsos/model/Observation"
import { ObservedProperty } from "~/layers/sta/modules/istsos/model/ObservedProperty"
import { Sensor } from "~/layers/sta/modules/istsos/model/Sensor"
import { Thing } from "~/layers/sta/modules/istsos/model/Thing"
import { Location } from "~/layers/sta/modules/istsos/model/Location"
import type { StaEntityType } from "./SensorThings.types"

export const getSensorThingsType = (type: string): StaEntityType => {

    if (Observation.entity == (type)) {
        return Observation
    } else if (Datastream.entity == (type)) {
        return Datastream
    } else if (FeatureOfInterest.entity == (type)) {
        return FeatureOfInterest
    } else if (Thing.entity == (type)) {
        return Thing
    } else if (Sensor.entity == (type)) {
        return Sensor
    } else if (Location.entity == (type)) {
        return Location
    } else if (HistoricalLocation.entity == (type)) {
        return HistoricalLocation
    } else if (ObservedProperty.entity == (type)) {
        return ObservedProperty
    } else {
        throw createError({
            message: `invalid sensorthings api type ${type} `
        })
    }
}