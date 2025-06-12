<template>
  <div class="observations-viewer">
    <h2>ISTOS Observations Viewer</h2>
    <p v-if="loading">Loading observations...</p>
    <p v-if="error" class="error-message">Error: {{ error.message }}</p>
    <div v-if="observations.length" class="observations-data">
      <h3>Observations (JSON)</h3>
      <pre>{{ JSON.stringify(observations, null, 2) }}</pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import Observations from '../shared/utils/Observations';
import ObservationImpl from '../shared/ObservationImpl';
import { GetAllObservations } from '../modules/istsos/usecase/read/GetAllObservations';

const observations = ref<any[]>([]);
const loading = ref(true);
const error = ref<Error | null>(null);

const ObservationImplementation = new ObservationImpl();
const observationRepository = new Observations(ObservationImplementation);
const getAllObservationsUseCase = new GetAllObservations(observationRepository);

onMounted(async () => {
  try {
    observations.value = await getAllObservationsUseCase.invoke();
  } catch (err: any) {
    error.value = err;
    console.error('Failed to fetch observations:', err);
  } finally {
    loading.value = false;
  }
});
</script>
