// Server plugin to extend LLMs documentation for istSOS4 Admin
export default defineNitroPlugin(async (nitroApp) => {
  console.log('Main LLMs plugin loaded')
  
  // Hook to extend the structured llms.txt documentation
  nitroApp.hooks.hook('llms:generate', async (event, options) => {
    console.log('Main llms:generate hook called')
    // Add API Documentation section
    options.sections.push({
      title: 'API Endpoints',
      description: 'RESTful API endpoints following the OGC SensorThings API specification',
      links: [
        {
          title: 'Things API',
          description: 'Manage IoT devices and sensors - physical objects of interest',
          href: `${options.domain}/api/v1.1/Things`
        },
        {
          title: 'Locations API',
          description: 'Manage spatial information and positioning data',
          href: `${options.domain}/api/v1.1/Locations`
        },
        {
          title: 'Sensors API',
          description: 'Manage sensor metadata and instrument information',
          href: `${options.domain}/api/v1.1/Sensors`
        },
        {
          title: 'ObservedProperties API',
          description: 'Manage phenomena that can be observed or measured',
          href: `${options.domain}/api/v1.1/ObservedProperties`
        },
        {
          title: 'Datastreams API',
          description: 'Manage collections of observations from a sensor',
          href: `${options.domain}/api/v1.1/Datastreams`
        },
        {
          title: 'Observations API',
          description: 'Manage actual measurement or estimate of properties',
          href: `${options.domain}/api/v1.1/Observations`
        },
        {
          title: 'HistoricalLocations API',
          description: 'Track the historical positions of Things over time',
          href: `${options.domain}/api/v1.1/HistoricalLocations`
        },
        {
          title: 'FeaturesOfInterest API',
          description: 'Manage features that are the subject of observations',
          href: `${options.domain}/api/v1.1/FeaturesOfInterest`
        }
      ]
    })

    // Add Component Architecture section
    options.sections.push({
      title: 'Component Architecture',
      description: 'Vue components organized by SensorThings API entities with shared implementations',
      links: [
        {
          title: 'Things Component',
          description: 'Vue component for displaying and managing Thing entities',
          href: `${options.domain}/components/Things`
        },
        {
          title: 'Datastreams Component',
          description: 'Vue component for visualization and management of datastream collections',
          href: `${options.domain}/components/Datastreams`
        },
        {
          title: 'Observations Component',
          description: 'Vue component for displaying observation data and measurements',
          href: `${options.domain}/components/Observations`
        },
        {
          title: 'Locations Component',
          description: 'Vue component for spatial data visualization and location management',
          href: `${options.domain}/components/Locations`
        }
      ]
    })

    // Add Development Tools section
    options.sections.push({
      title: 'Development & Tools',
      description: 'Development tools, configuration, and monitoring features',
      links: [
        {
          title: 'Nuxt DevTools',
          description: 'Development tools for debugging and performance monitoring',
          href: `${options.domain}/_devtools`
        },
        {
          title: 'Prometheus Metrics',
          description: 'Application metrics and monitoring endpoints',
          href: `${options.domain}/metrics`
        },
        {
          title: 'TypeScript Configuration',
          description: 'TypeScript settings and type definitions for the project',
          href: `${options.domain}/types`
        }
      ]
    })
  })

  // Hook to extend the detailed llms-full.txt documentation
  nitroApp.hooks.hook('llms:generate:full', async (event, options, contents) => {
    console.log('Main llms:generate:full hook called')
    contents.push(`## SensorThings API Implementation

### Overview
istSOS4 Admin implements the OGC SensorThings API 1.1 specification, providing a standardized way to interconnect IoT sensing devices, data, and applications over the Web.

### Entity Model
The application follows the SensorThings API entity model with the following core entities:

#### Thing
A Thing is an object of the physical world (physical things) or the information world (virtual things) that is capable of being identified and integrated into communication systems.

#### Location
A Location entity locates the Thing or the Things it is associated with. A Thing's Location entity is defined as the last known location of the Thing.

#### Sensor  
A Sensor is an instrument that observes a property or phenomenon with the goal of producing an estimate of the value of the property.

#### ObservedProperty
An ObservedProperty specifies the phenomenon of an observation. In IoT sensing, observed properties are typically environmental phenomena.

#### Datastream
A Datastream groups a collection of Observations measuring the same ObservedProperty and produced by the same Sensor.

#### Observation
An Observation is the act of measuring or otherwise determining the value of a property.

### Repository Pattern
The application uses the Repository pattern to abstract data access:

- **DatastreamRepository**: Handles CRUD operations for datastream entities
- **ObservationRepository**: Manages observation data persistence and retrieval
- **ThingRepository**: Manages Thing entity operations
- **LocationRepository**: Handles spatial data operations
- **SensorRepository**: Manages sensor metadata
- **ObservedPropertyRepository**: Handles observed property definitions

### Component Implementation
Each SensorThings entity has corresponding Vue components following a consistent pattern:

\`\`\`typescript
// Example component structure
interface ComponentProps {
  entityId?: string
  readonly?: boolean
  showRelations?: boolean
}
\`\`\`

### Type Definitions
The application includes comprehensive TypeScript definitions for all SensorThings entities:

- \`istSOSThing\`: Type definition for Thing entities
- \`istSOSDatastream\`: Type definition for Datastream entities  
- \`istSOSObservation\`: Type definition for Observation entities
- \`istSOSLocation\`: Type definition for Location entities

### Configuration
The application supports multiple runtime configurations:

- **Development**: Uses local API endpoint (127.0.0.1:8018)
- **Docker**: Configured for containerized deployment
- **Production**: Configurable service root URI

### State Management
Uses Pinia for reactive state management with ORM capabilities through pinia-orm for entity relationships and data modeling.`)

    contents.push(`## Development Setup

### Prerequisites
- Deno runtime (configured as Nitro preset)
- Node.js and npm/pnpm for dependency management
- TypeScript knowledge recommended

### Layer Architecture
The application uses Nuxt layers for modular architecture:

1. **Core Layer** (\`src/core/\`): Base functionality, assets, and plugins
2. **Site Layer** (\`src/layers/site/\`): General site components and layouts  
3. **STA Layer** (\`src/layers/sta/\`): SensorThings API specific implementation

### Running the Application
\`\`\`bash
# Development mode
npm run dev

# Build for production
npm run build

# Generate static site
npm run generate
\`\`\`

### Testing
The application includes component testing and type checking:
\`\`\`bash
# Type checking
npm run type-check

# Development logs
npm run logs
\`\`\``)
  })
})
