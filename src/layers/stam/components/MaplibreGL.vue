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
          />
        </MglGeoJsonSource>
        <MglNavigationControl />
      </MglMap>
    </div>
  </ClientOnly>
</template>

<script setup>
import { useRepo } from 'pinia-orm';
import { FeatureOfInterest } from '~/layers/sta/modules/istsos/model/FeatureOfInterest';

const style = 'https://demotiles.maplibre.org/style.json';
const center = [-1.559482, 47.21322];
const zoom = 1;

const featureOfInterestRepo = useRepo(FeatureOfInterest)
const featuresofInterest = computed(() => featureOfInterestRepo.all())

// Transform FeatureOfInterest data into proper GeoJSON format
const geoJsonData = computed(() => {
  const features = featuresofInterest.value
    .filter(foi => foi.feature && foi.feature.coordinates)
    .map(foi => ({
      type: 'Feature',
      geometry: {
        type: foi.feature.type || 'Point',
        coordinates: foi.feature.coordinates
      },
      properties: {
        id: foi['@iot.id'],
        name: foi.name,
        description: foi.description,
        encodingType: foi.encodingType
      }
    }))

  return {
    type: 'FeatureCollection',
    features: features
  }
})
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 400px; /* Set a fixed height */
  min-height: 400px;
}
</style>