<template>
  <div class="observation-viewer">
    <h2>ISTOS Observation Viewer</h2>
    <p v-if="loading">Loading observation...</p>
    <p v-if="error" class="error-message">Error: {{ error.message }}</p>

    <div v-if="observation" class="observation-data">
      <h3>Observation Details (JSON)</h3>
      <pre>{{ JSON.stringify(observation, null, 2) }}</pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { ObservationImpl } from '#imports'; // Assuming this correctly imports your ObservationImpl class
import { GetObservation } from '../modules/istsos/usecase/GetObservation';
import istSOSObservationImpl from '../shared/crud/istSOSObservationImpl';

// Define reactive variables for observation data, loading state, and errors
const observation = ref<any>(null);
const loading = ref(true);
const error = ref<Error | null>(null);

// Initialize your use case and repository
const ObservationImplementation = new istSOSObservationImpl();
const observationRepository = new ObservationImpl(ObservationImplementation);
const getObservationsUseCase = new GetObservation(observationRepository);

// Define the ID of the observation to fetch
const OBSERVATION_ID = 105409;

// Fetch the observation when the component is mounted
onMounted(async () => {
  try {
    // Invoke the use case to get the observation
    const fetchedObservation = await getObservationsUseCase.invoke(OBSERVATION_ID);
    observation.value = fetchedObservation; // Assign the fetched data to the reactive variable
  } catch (err: any) {
    error.value = err; // Set the error if something goes wrong
    console.error('Failed to fetch observation:', err);
  } finally {
    loading.value = false; // Always set loading to false once the operation completes
  }
});
</script>