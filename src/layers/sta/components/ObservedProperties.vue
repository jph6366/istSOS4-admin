<template>
  <div class="observed-properties-viewer">
    <h2>ISTOS Observed Properties Viewer</h2>
    <p v-if="loading">Loading observed properties...</p>
    <p v-if="error" class="error-message">Error: {{ error.message }}</p>
    <div v-if="observedProperties.length" class="observed-properties-data">
      <h3>Observed Properties (JSON)</h3>
      <pre>{{ JSON.stringify(observedProperties, null, 2) }}</pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import ObservedProperties from '../shared/utils/ObservedProperties';
import ObservedPropertyImpl from '../shared/ObservedPropertyImpl';
import { GetAllObservedProperties } from '../modules/istsos/usecase/read/GetAllObservedProperties';

const observedProperties = ref<any[]>([]);
const loading = ref(true);
const error = ref<Error | null>(null);

const observedPropertyRepository = new ObservedProperties(new ObservedPropertyImpl());
const getAllObservedPropertiesUseCase = new GetAllObservedProperties(observedPropertyRepository);

onMounted(async () => {
  try {
    observedProperties.value = await getAllObservedPropertiesUseCase.invoke();
  } catch (err: any) {
    error.value = err;
    console.error('Failed to fetch observed properties:', err);
  } finally {
    loading.value = false;
  }
});
</script>
