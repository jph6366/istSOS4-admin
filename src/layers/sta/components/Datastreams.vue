<template>
  <div class="datastreams-viewer">
    <h2>ISTOS Datastreams Viewer</h2>
    <p v-if="loading">Loading datastreams...</p>
    <p v-if="error" class="error-message">Error: {{ error.message }}</p>
    <div v-if="datastreams.length" class="datastreams-data">
      <h3>Datastreams (JSON)</h3>
      <pre>{{ JSON.stringify(datastreams, null, 2) }}</pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import Datastreams from '../shared/utils/Datastreams';
import DatastreamImpl from '../shared/DatastreamImpl';
import { GetAllDatastreams } from '../modules/istsos/usecase/read/GetAllDatastreams';

const datastreams = ref<any[]>([]);
const loading = ref(true);
const error = ref<Error | null>(null);

const datastreamRepository = new Datastreams(new DatastreamImpl());
const getAllDatastreamsUseCase = new GetAllDatastreams(datastreamRepository);

onMounted(async () => {
  try {
    datastreams.value = await getAllDatastreamsUseCase.invoke();
  } catch (err: any) {
    error.value = err;
    console.error('Failed to fetch datastreams:', err);
  } finally {
    loading.value = false;
  }
});
</script>
