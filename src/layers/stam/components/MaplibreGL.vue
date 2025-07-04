<template>
  <ClientOnly>
    <div class="map-container">
      <MglMap
        :map-style="style"
        :center="center"
        :zoom="zoom"
      >
        <MglGeoJsonSource 
          source-id="features-of-interest"
          :data="geoJsonData"
        >
          <MglCircleLayer 
            :layer-id="'features-of-interest-layer'"
            :paint="{
              'circle-radius': 6,
              'circle-color': '#007cbf',
              'circle-stroke-width': 2,
              'circle-stroke-color': '#fff'
            }"
            @click="handleLayerClick"
          />
          <MglPopup
            v-if="selectedFeature"
            :coordinates="selectedFeature.geometry.coordinates"
            @close="selectedFeature = null"
          >
            <div class="popup-content">
              <h3>{{ selectedFeature.properties.name }}</h3>
              <p>{{ selectedFeature.properties.description }}</p>
              <p><strong>ID:</strong> {{ selectedFeature.properties.id }}</p>
            </div>
          </MglPopup>
        </MglGeoJsonSource>
        <MglNavigationControl />
      </MglMap>
    </div>
  </ClientOnly>
</template>

<script setup>
import { useRepo } from 'pinia-orm';
import { ref, computed, onMounted, watch } from 'vue';
import { FeatureOfInterest } from '~/layers/sta/modules/istsos/model/FeatureOfInterest';
import { 
  config,
  coordinates,
  // Other MapTiler services you might need:
  // geocoding,
  // geolocation,
  // data
} from '@maptiler/client';

const style = 'https://demotiles.maplibre.org/style.json';
const center = [-1.559482, 47.21322];
const zoom = 1;

// State for popup
const selectedFeature = ref(null);

const featureOfInterestRepo = useRepo(FeatureOfInterest)
const featuresofInterest = computed(() => featureOfInterestRepo.all())

// MapTiler client initialization status
const maptilerInitialized = ref(false);

// MapTiler API key - replace with your actual key in a production environment
// Best practice is to store this in an environment variable

// Initialize MapTiler client
onMounted(async () => {
  try {
    // Set API key for MapTiler services
    // In production, get this from environment variables
    // config.apiKey = import.meta.env.VITE_MAPTILER_API_KEY || process.env.MAPTILER_API_KEY;
    config.apiKey = 'h0SYrlCTHvaXiBowwmP4';
    
    // Mark MapTiler as initialized since we've set the API key
    maptilerInitialized.value = true;
    console.log('MapTiler client initialized successfully')
    
    // Now that MapTiler is initialized, update coordinates for any existing features
    if (featuresofInterest.value?.length) {
      await updateCoordinates();
    }
  } catch (error) {
    console.error('Failed to initialize MapTiler client:', error);
  }
});

// Transform coordinates based on CRS using MapTiler
const transformCoordinates = async (feature) => {
  if (!feature.feature?.coordinates) {
    return [];
  }
  
  const sourceCoords = feature.feature.coordinates;
  
  // Check if MapTiler is initialized
  if (!maptilerInitialized.value) {
    console.warn('MapTiler client not yet initialized, using original coordinates');
    return sourceCoords;
  }
  
  // Check if CRS information is available
  if (!feature.feature?.crs?.properties?.name) {
    // If coordinates look like longitude/latitude (WGS84), assume EPSG:4326
    if (Array.isArray(sourceCoords) && 
        sourceCoords.length >= 2 && 
        typeof sourceCoords[0] === 'number' && 
        typeof sourceCoords[1] === 'number' &&
        sourceCoords[0] >= -180 && sourceCoords[0] <= 180 && 
        sourceCoords[1] >= -90 && sourceCoords[1] <= 90) {
      console.info(`Feature ${feature['@iot.id']} (${feature.name}) has no CRS specified. ` +
                  `Coordinates appear to be in WGS84 format, assuming EPSG:4326.`);
      return sourceCoords;
    } else {
      console.warn(`Feature ${feature['@iot.id']} (${feature.name}) has no CRS specified and ` +
                  `coordinates do not appear to be in WGS84 format. Using as-is, which may cause display issues.`);
      return sourceCoords;
    }
  }
  
  const crsName = feature.feature.crs.properties.name;
  
  // If already in WGS84, just return the coordinates
  if (crsName.toUpperCase() === 'EPSG:4326' || crsName.toUpperCase() === 'WGS84') {
    console.info(`Feature ${feature['@iot.id']} (${feature.name}) is already using WGS84/EPSG:4326 coordinate system.`);
    return sourceCoords;
  }
  
  try {
    // Extract EPSG code number from the CRS name (e.g., "EPSG:2056" -> 2056)
    const epsgCodeMatch = crsName.match(/EPSG:(\d+)/i);
    if (!epsgCodeMatch || !epsgCodeMatch[1]) {
      throw new Error(`Invalid CRS format or unsupported CRS: ${crsName}`);
    }
    
    const epsgCode = parseInt(epsgCodeMatch[1], 10);
    
    // Use the modern MapTiler Client API for coordinate transformation
    // The API supports both single coordinates and arrays of coordinates
    const result = await coordinates.transform(
      sourceCoords,  // Can be [x, y] or {lng: x, lat: y}
      { 
        sourceCrs: epsgCode,  // Source CRS (e.g., 2056 for Swiss projection)
        targetCrs: 4326       // Target CRS (WGS84)
      }
    );
    
    // Handle different result formats
    if (result) {
      let transformedCoords;
      
      if (Array.isArray(result) && result.length === 2) {
        // Result is directly [lon, lat]
        transformedCoords = result;
      } else if (typeof result === 'object' && 'lng' in result && 'lat' in result) {
        // Result is {lng, lat} object
        transformedCoords = [result.lng, result.lat];
      } else if (Array.isArray(result) && result.length === 1 && 
                (Array.isArray(result[0]) || ('lng' in result[0] && 'lat' in result[0]))) {
        // Result is an array with a single result
        const firstResult = result[0];
        transformedCoords = Array.isArray(firstResult) 
          ? firstResult 
          : [firstResult.lng, firstResult.lat];
      } else if (typeof result === 'object' && 'results' in result && Array.isArray(result.results) && result.results.length > 0) {
        const firstResult = result.results[0];
        if ('x' in firstResult && 'y' in firstResult) {
          transformedCoords = [firstResult.x, firstResult.y];
        } else {
          throw new Error(`Unexpected result object structure: ${JSON.stringify(firstResult)}`);
        }
      } else {
        throw new Error(`Unexpected transformation result format: ${JSON.stringify(result)}`);
      }
      
      console.log(`Transformed coordinates for feature ${feature['@iot.id']} from ${crsName} to WGS84:`, transformedCoords);
      return transformedCoords;
    } else {
      throw new Error('Transformation returned no result');
    }
  } catch (error) {
    console.error(`Failed to transform coordinates for feature ${feature['@iot.id']}:`, error);
    return sourceCoords; // Return original coordinates on error
  }
}

// Store transformed coordinates to avoid recalculating
const transformedCoordinatesCache = ref(new Map());

// Transform all features and update the cache
const updateCoordinates = async () => {
  if (!featuresofInterest.value) return;
  
  // Process all features that have coordinates
  for (const foi of featuresofInterest.value) {
    if (!foi.feature?.coordinates) continue;
    
    const featureId = foi['@iot.id'];
    
    try {
      // Only transform if not already in cache
      if (!transformedCoordinatesCache.value.has(featureId)) {
        const transformedCoords = await transformCoordinates(foi);
        transformedCoordinatesCache.value.set(featureId, transformedCoords);
      }
    } catch (error) {
      console.error(`Error transforming coordinates for feature ${featureId}:`, error);
    }
  }
};

// Call updateCoordinates when maptilerInitialized changes or features change
watch([maptilerInitialized, featuresofInterest], async ([isInitialized, features]) => {
  if (isInitialized && features?.length) {
    await updateCoordinates();
  }
});

// Update when component is mounted if already initialized
onMounted(async () => {
  if (maptilerInitialized.value && featuresofInterest.value?.length) {
    await updateCoordinates();
  }
});

// Transform FeatureOfInterest data into proper GeoJSON format
const geoJsonData = computed(() => {
  const features = featuresofInterest.value
    .filter(foi => foi.feature && foi.feature.coordinates)
    .map(foi => {
      // Get transformed coordinates from cache or use original as fallback
      const featureId = foi['@iot.id'];
      const transformedCoordinates = transformedCoordinatesCache.value.has(featureId) 
        ? transformedCoordinatesCache.value.get(featureId) 
        : foi.feature.coordinates;
      
      return {
        type: 'Feature',
        geometry: {
          type: foi.feature.type || 'Point',
          coordinates: transformedCoordinates
        },
        properties: {
          id: foi['@iot.id'],
          name: foi.name,
          description: foi.description,
          encodingType: foi.encodingType,
          originalCrs: foi.feature?.crs?.properties?.name || 'assumed EPSG:4326'
        }
      };
    })

  return {
    type: 'FeatureCollection',
    features: features
  }
})

// Handle click on feature
const handleLayerClick = (event) => {
  // Get the clicked feature
  if (event.features && event.features.length > 0) {
    selectedFeature.value = event.features[0];
  }
}
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 400px; /* Set a fixed height */
  min-height: 400px;
}

.popup-content {
  padding: 5px;
  max-width: 250px;
}

.popup-content h3 {
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
}

.popup-content p {
  margin-bottom: 5px;
  font-size: 14px;
}
</style>