// STA Layer runtime server plugin for LLMs documentation
export default defineNitroPlugin(async (nitroApp) => {
  console.log('STA LLMs plugin loaded')
  
  nitroApp.hooks.hook('llms:generate', async (event, options) => {
    console.log('STA llms:generate hook called')
    // Add STA-specific documentation
    options.sections.push({
      title: 'SensorThings API Models',
      description: 'TypeScript model definitions for SensorThings API entities with full type safety',
      links: [
        {
          title: 'Thing Model',
          description: 'Model definition for IoT devices and physical objects',
          href: `${options.domain}/models/Thing`
        },
        {
          title: 'Datastream Model', 
          description: 'Model for collections of observations from sensors',
          href: `${options.domain}/models/Datastream`
        },
        {
          title: 'Observation Model',
          description: 'Model for individual sensor measurements and estimates',
          href: `${options.domain}/models/Observation`
        },
        {
          title: 'Location Model',
          description: 'Spatial model for positioning and geographic data',
          href: `${options.domain}/models/Location`
        },
        {
          title: 'Sensor Model',
          description: 'Model for sensor metadata and instrument information',
          href: `${options.domain}/models/Sensor`
        },
        {
          title: 'ObservedProperty Model',
          description: 'Model for phenomena that can be observed or measured',
          href: `${options.domain}/models/ObservedProperty`
        },
        {
          title: 'HistoricalLocation Model',
          description: 'Model for tracking historical positions over time',
          href: `${options.domain}/models/HistoricalLocation`
        },
        {
          title: 'FeatureOfInterest Model',
          description: 'Model for features that are subjects of observations',
          href: `${options.domain}/models/FeatureOfInterest`
        }
      ]
    })
  })

  nitroApp.hooks.hook('llms:generate:full', async (event, options, contents) => {
    console.log('STA llms:generate:full hook called')
    contents.push(`## STA Layer Implementation Details

### Model Definitions
The STA layer includes comprehensive TypeScript models for all SensorThings API entities:

#### Thing Model (\`Datastream.ts\`)
Represents physical or virtual objects capable of being identified and integrated into communication systems.

Properties:
- \`@iot.id\`: Unique identifier
- \`name\`: Human-readable name
- \`description\`: Detailed description
- \`properties\`: Additional metadata
- \`Locations\`: Associated location entities
- \`Datastreams\`: Connected datastream collections

#### Datastream Model (\`Datastream.ts\`)
Groups collections of observations measuring the same property from the same sensor.

Properties:
- \`@iot.id\`: Unique identifier
- \`name\`: Datastream name
- \`description\`: Detailed description
- \`unitOfMeasurement\`: Measurement unit specification
- \`observationType\`: Type of observation (e.g., OM_Measurement)
- \`phenomenonTime\`: Time range of observations
- \`resultTime\`: Time when results are available

#### Repository Pattern Implementation
Each model has a corresponding repository for data access:

\`\`\`typescript
interface Repository<T> {
  findById(id: string): Promise<T | null>
  findAll(params?: QueryParams): Promise<T[]>
  create(entity: Partial<T>): Promise<T>
  update(id: string, entity: Partial<T>): Promise<T>
  delete(id: string): Promise<boolean>
}
\`\`\`

### Component Architecture
Vue components in the STA layer follow consistent patterns:

#### Datastreams Component (\`Datastreams.vue\`)
- Displays datastream collections with filtering
- Supports real-time updates
- Integrates with observation visualization
- Provides CRUD operations interface

#### Observations Component (\`Observations.vue\`)  
- Time-series data visualization
- Chart integration for measurement display
- Pagination for large datasets
- Export functionality for data analysis

#### Things Component (\`Things.vue\`)
- Device management interface
- Location mapping integration
- Relationship visualization with connected entities
- Batch operations support

### Utility Functions
The STA layer includes utility functions for common operations:

- **Datastreams.ts**: Helper functions for datastream operations
- **Observations.ts**: Utilities for observation data processing
- **Locations.ts**: Spatial data utilities and transformations
- **Things.ts**: Device management utilities

### Type Definitions
Comprehensive TypeScript interfaces ensure type safety:

\`\`\`typescript
interface istSOSDatastream {
  '@iot.id': string | number
  name: string
  description: string
  unitOfMeasurement: UnitOfMeasurement
  observationType: string
  phenomenonTime?: string
  resultTime?: string
  Thing?: istSOSThing
  Sensor?: istSOSSensor
  ObservedProperty?: istSOSObservedProperty
  Observations?: istSOSObservation[]
}
\`\`\``)
  })
})
