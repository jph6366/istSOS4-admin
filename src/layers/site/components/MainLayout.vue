<script setup lang="ts">
import { FeatureOfInterest } from '~/layers/sta/modules/istsos/model/FeatureOfInterest';
import type { StaEntityType } from '~/layers/sta/modules/istsos/model/SensorThings.types';
import { getSensorThingsType } from '~/layers/sta/modules/istsos/model/SensorThings.utils';
import { GetAllEntityType } from '~/layers/sta/modules/istsos/usecase/read/GetAllEntityType';
import SensorThingsDemo from '~/layers/sta/shared/SensorThingsDemo';
import SensorThingsImpl from '~/layers/sta/shared/SensorThingsImpl';

const staEntitySets = useStApi()
const selectedEntityType = ref<StaEntityType>(FeatureOfInterest);
const entitySet = ref<StaEntityType[]>();

const updateSelectedType = (newType: string) => {
  selectedEntityType.value = getSensorThingsType(newType)
};


watch(selectedEntityType, async (newType) => {
    const implementation = new SensorThingsImpl();
    const repository = new SensorThings(implementation);
    const usecase = new GetAllEntityType(repository);
    const result = await usecase.invoke(newType);
    entitySet.value = result.value;
});

onMounted(async () => {
    const implementation = new SensorThingsImpl();
    const repository = new SensorThings(implementation);
    const usecase = new GetAllEntityType(repository);
    const result = await usecase.invoke(selectedEntityType.value);
    entitySet.value = result.value;
})

</script>

<template>
    <div  class="inline-flex gap-1 w-full">
        <div class="join" v-for="(value, key) in staEntitySets.rootLinks" :key="key" >
            <input class="join-item btn" type="radio" name="options" :aria-label="value.name" @change="updateSelectedType(value.name)"/>
        </div>
    </div>
<br></br><br></br><br></br>
    <div v-if="entitySet!" class="flex">
        <EntitySet :entity-set="entitySet!" />
        <div class="divider divider-horizontal"></div>
        <STAMLibreGL :entity-set="entitySet!"/>
    </div>
    <br/>
    <br/>
    <slot></slot>
    <MainFooter />
</template>
