<template>
  <div class="things-viewer">
    <h2>ISTOS Things Viewer</h2>
    <p v-if="loading">Loading things...</p>
    <p v-if="error" class="error-message">Error: {{ error.message }}</p>
    <div v-if="things.length" class="things-data">
      <h3>Things (JSON)</h3>
      <pre>{{ JSON.stringify(things, null, 2) }}</pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import Things from '../shared/utils/Things';
import ThingImpl from '../shared/ThingImpl';
import { GetAllThings } from '../modules/istsos/usecase/read/GetAllThings';

const things = ref<any[]>([]);
const loading = ref(true);
const error = ref<Error | null>(null);

const thingRepository = new Things(new ThingImpl());
const getAllThingsUseCase = new GetAllThings(thingRepository);

onMounted(async () => {
  try {
    things.value = await getAllThingsUseCase.invoke();
  } catch (err: any) {
    error.value = err;
    console.error('Failed to fetch things:', err);
  } finally {
    loading.value = false;
  }
});
</script>
