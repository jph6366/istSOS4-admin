<template>
  <div class="locations-viewer">
    <h2>ISTOS Locations Viewer</h2>
    <p v-if="loading">Loading locations...</p>
    <p v-if="error" class="error-message">Error: {{ error.message }}</p>
    <div v-if="locations.length" class="locations-data">
      <h3>Locations (JSON)</h3>
      <pre>{{ JSON.stringify(locations, null, 2) }}</pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import Locations from '../shared/utils/Locations';
import LocationImpl from '../shared/LocationImpl';
import { GetAllLocations } from '../modules/istsos/usecase/read/GetAllLocations';

const locations = ref<any[]>([]);
const loading = ref(true);
const error = ref<Error | null>(null);

const locationRepository = new Locations(new LocationImpl());
const getAllLocationsUseCase = new GetAllLocations(locationRepository);

onMounted(async () => {
  try {
    locations.value = await getAllLocationsUseCase.invoke();
  } catch (err: any) {
    error.value = err;
    console.error('Failed to fetch locations:', err);
  } finally {
    loading.value = false;
  }
});
</script>
