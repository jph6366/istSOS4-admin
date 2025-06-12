<template>
  <div class="sensors-viewer">
    <h2>ISTOS Sensors Viewer</h2>
    <p v-if="loading">Loading sensors...</p>
    <p v-if="error" class="error-message">Error: {{ error.message }}</p>
    <div v-if="sensors.length" class="sensors-data">
      <h3>Sensors (JSON)</h3>
      <pre>{{ JSON.stringify(sensors, null, 2) }}</pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import Sensors from '../shared/utils/Sensors';
import SensorImpl from '../shared/SensorImpl';
import { GetAllSensors } from '../modules/istsos/usecase/read/GetAllSensors';

const sensors = ref<any[]>([]);
const loading = ref(true);
const error = ref<Error | null>(null);

const sensorRepository = new Sensors(new SensorImpl());
const getAllSensorsUseCase = new GetAllSensors(sensorRepository);

onMounted(async () => {
  try {
    sensors.value = await getAllSensorsUseCase.invoke();
  } catch (err: any) {
    error.value = err;
    console.error('Failed to fetch sensors:', err);
  } finally {
    loading.value = false;
  }
});
</script>
