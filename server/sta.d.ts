type Role = 'admin' | 'viewer' | 'editor' | 'obs_manager' | 'sensor'
export type StaEntityName = 'Things' | 'Locations' | 'Datastreams' | 'Observations' 
| 'ObservedProperties' | 'Sensors' | 'FeaturesOfInterest' | 'HistoricalLocations'
export type Provider = {
    name: string,
    description: string,
    roles?: Role[],
    url: string
}

export type StaServiceUri = string | URL

export type StaResourcePath = `${StaServiceURI}/${StaEntityName}`

declare module 'h3' {
    interface H3EventContext {
        staService: {
            value: {
                name: StaEntityName,
                url: StaResourcePath,
            }[],
            serverSettings: {
                conformance: []
            }
        }
    }
}

export {}