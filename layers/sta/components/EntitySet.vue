<script setup lang="tsx">
import type { StaEntityType } from '../modules/istsos/model/SensorThings.types';
import StApiModel from './Entity.vue';


const props = defineProps<{
  entitySet: StaEntityType[]
}>()


</script>

<template>

<div v-if="entitySet && entitySet.length" className="h-216 overflow-x-auto">
  <table  className="table table-xs w-300">
    <thead>
      <tr>
        <th></th>
        <th v-for="(_, prop) in entitySet[0]">{{prop.includes('@iot.navigationLink') ? undefined : prop }}</th>
      </tr>
    </thead>
    <tbody >
      <tr v-for="(entity, k) in entitySet" :key="k" >
        <th ></th>
        <td v-for="(value, key) in entity">
            <template v-if="key.includes('@iot.selfLink')">
             <StApiModel :staModel="entity" ></StApiModel>
            </template>
            <template v-else-if="key.includes('@iot.navigationLink')">
              <a :href="value"><button class="btn btn-xs btn-outline btn-success">{{ key.split('@')[0] }}</button></a>
            </template>
            <template v-else>
              <p className="font-bold text-xs">{{ value }}</p>
            </template>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th v-for="(val, prop) in entitySet[0]">{{prop.includes('@iot.navigationLink') ? undefined : prop }}</th>
      </tr>
    </tfoot>
  </table>
</div>
</template>
