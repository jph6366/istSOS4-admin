<script lang="tsx" setup>
import type { StaEntityType } from '../modules/istsos/model/SensorThings.types';
const props = defineProps<{
  staModel: StaEntityType
}>()

</script>

<template>
<label for="my_modal_7" class="btn">view modal</label>
<input type="checkbox" id="my_modal_7" class="modal-toggle" />
<div v-if="staModel" class="modal" role="dialog">
  <div class="modal-box">
    <h3 class="text-lg font-bold">{{ staModel.name || staModel["@iot.id"] }} </h3>
<ul>
<li v-for="(value, key) in staModel" :key="key">
<pre>
<strong>{{ key }}:  </strong>{{ value }}
</pre>
</li>
</ul>
  </div>
  <label class="modal-backdrop" for="my_modal_7">Close</label>
</div>
</template>