<template>
  <div class="historical-locations-viewer">
    <h2>ISTOS Historical Locations Viewer</h2>
    <p v-if="loading">Loading historical locations...</p>
    <p v-if="error" class="error-message">Error: {{ error.message }}</p>
    <div v-if="historicalLocations.length" class="historical-locations-data">
      <h3>Historical Locations (JSON)</h3>
      <pre>{{ JSON.stringify(historicalLocations, null, 2) }}</pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import HistoricalLocations from '../shared/utils/HistoricalLocations';
import HistoricalLocationImpl from '../shared/HistoricalLocationImpl';
import { GetAllHistoricalLocations } from '../modules/istsos/usecase/read/GetAllHistoricalLocations';

const historicalLocations = ref<any[]>([]);
const loading = ref(true);
const error = ref<Error | null>(null);

const historicalLocationRepository = new HistoricalLocations(new HistoricalLocationImpl());
const getAllHistoricalLocationsUseCase = new GetAllHistoricalLocations(historicalLocationRepository);

onMounted(async () => {
  try {
    historicalLocations.value = await getAllHistoricalLocationsUseCase.invoke();
  } catch (err: any) {
    error.value = err;
    console.error('Failed to fetch historical locations:', err);
  } finally {
    loading.value = false;
  }
});
</script>
