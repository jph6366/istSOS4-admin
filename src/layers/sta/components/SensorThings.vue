<template>
  <div class="observation-viewer">
    <h2>ISTOS Observation Viewer</h2>
    <p v-if="loading">Loading observation...</p>
    <p v-if="error" class="error-message">Error: {{ error.message }}</p>

    <div v-if="observation" class="observation-data">
      <h3>Single Sample FeatureOfInterest JSON</h3>
      <pre>{{ JSON.stringify(observation[0], null, 2) }}</pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { SensorThings } from '#imports';
import { GetOneOfEntityType } from '../modules/istsos/usecase/read/GetOneOfEntityType';
import SensorThingsImpl from '../shared/SensorThingsImpl';
import { Observation } from '../modules/istsos/model/Observation';
import type { EntityType } from '../modules/istsos/model/SensorThings.types';
import { GetLinkedEntityType } from '../modules/istsos/usecase/read/GetLinkedEntity';
import { FeatureOfInterest } from '../modules/istsos/model/FeatureOfInterest';
import { GetLinkedEntitySet } from '../modules/istsos/usecase/read/GetLinkedEntitySet';
import { GetAllEntityType } from '../modules/istsos/usecase/read/GetAllEntityType';

// Define reactive variables for observation data, loading state, and errors
const observation = ref<any>(null);
const loading = ref(true);
const error = ref<Error | null>(null);

// Initialize your use case and repository
const implementation = new SensorThingsImpl();
const repository = new SensorThings(implementation);
const getAllEntityuseCase = new GetAllEntityType(repository);
const getEntityuseCase = new GetOneOfEntityType(repository);
const getLinkedEntityuseCase = new GetLinkedEntityType(repository);
const GetLinkedEntitySetuseCase = new GetLinkedEntitySet(repository);
  

// Define the ID of the ENTITY to fetch
const ENTITY_ID = 1;

// Fetch the observation when the component is mounted
onMounted(async () => {
  try {
    // Invoke the use case to get the observation
    const fetchedObservation = await getAllEntityuseCase.invoke(FeatureOfInterest);
    observation.value = fetchedObservation.value; // Assign the fetched data to the reactive variable
  } catch (err: any) {
    error.value = err; // Set the error if something goes wrong
    console.error('Failed to fetch observation:', err);
  } finally {
    loading.value = false; // Always set loading to false once the operation completes
  }
});
</script>