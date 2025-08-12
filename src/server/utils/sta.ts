import { Datastream } from "~/layers/sta/modules/istsos/model/Datastream"
import { FeatureOfInterest } from "~/layers/sta/modules/istsos/model/FeatureOfInterest"
import { HistoricalLocation } from "~/layers/sta/modules/istsos/model/HistoricalLocation"
import { Observation } from "~/layers/sta/modules/istsos/model/Observation"
import { ObservedProperty } from "~/layers/sta/modules/istsos/model/ObservedProperty"
import { Sensor } from "~/layers/sta/modules/istsos/model/Sensor"
import { Thing } from "~/layers/sta/modules/istsos/model/Thing"
import { Location } from "~/layers/sta/modules/istsos/model/Location"
import type { StaEntityType } from "~/layers/sta/modules/istsos/model/SensorThings.types"

import { H3Event } from 'h3'
import { joinURL } from 'ufo'
import type { StaEntityName, StaResourcePath } from "../sta"

export const getSensorThingsType = (type:string):StaEntityType => {

    if (Observation.entity == (type)) {
        return new Observation
    } else if (Datastream.entity == (type)) {
        return new Datastream
    } else if (FeatureOfInterest.entity == (type)) {
        return new FeatureOfInterest
    } else if (Thing.entity == (type)) {
        return new Thing
    } else if (Sensor.entity == (type)) {
        return new Sensor
    } else if (Location.entity == (type)) {
        return new Location
    } else if (HistoricalLocation.entity == (type)) {
        return new HistoricalLocation
    } else if (ObservedProperty.entity == (type)) {
        return new ObservedProperty
    } else {
        throw createError({
            message: `invalid sensorthings api type ${type} `
        })
    }
}

export const getSensorThingsService = defineCachedFunction( async (serviceRootUri: string) => {
    const fetchEntitySetCollection = await $fetch<any>(serviceRootUri)
    return fetchEntitySetCollection
})

const staServiceExists = (
    resourceUrls: {
    name: StaEntityName,
    url: StaResourcePath,
}[], 
resource: StaEntityName) => { 
    for (const staUriSao of resourceUrls) {
        if(staUriSao.name === resource){
            return staUriSao.url
        }   
    }
    const runtimeConfig = useRuntimeConfig()
    const serviceRootUri = runtimeConfig.public.serviceRootUri
    return joinURL(serviceRootUri, resource)
}


export const getAllEntityType = defineCachedFunction(async (event: H3Event, type:string) => {
    const resourcePath = getSensorThingsType(type).$entity() as StaEntityName
    const requestUrl = staServiceExists(event.context.staService.value, resourcePath)
    const fetchEntityCollection: StaEntityType[] = await $fetch<any>(requestUrl)
    return fetchEntityCollection
}, {
    swr: false,
    // maxAge: 60,
    // staleMaxAge: 120 
}
)

export const getOneEntityType = defineCachedFunction(async (event: H3Event, type:string, id:number):Promise<StaEntityType> => {
    const resourcePath = getSensorThingsType(type).$entity() as StaEntityName
    const requestUrl = staServiceExists(event.context.staService.value, resourcePath)
    const fetchEntity:StaEntityType  = await $fetch<any>(requestUrl)
    return fetchEntity
}, {
    swr: false,
    // maxAge: 60,
    // staleMaxAge: 120, 
}
)
