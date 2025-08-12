<template>
    <div class="w-full">
        <ClientOnly>
            <div class="map-container size-full">
                <div id="map" class="map size-full" />

                <!-- Globe View Toggle -->
                <label class="btn btn-circle swap swap-rotate">
                    <!-- this hidden checkbox controls the state -->
                    <input type="checkbox" @click="toggleMapProjection()" />

                    <!-- hamburger icon -->
                    <svg class="swap-off fill-current"viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 27C15.7348 27 15.4804 26.8946 15.2929 26.7071C15.1054 26.5196 15 26.2652 15 26V23C15 22.7348 15.1054 22.4804 15.2929 22.2929C15.4804 22.1054 15.7348 22 16 22C16.2652 22 16.5196 22.1054 16.7071 22.2929C16.8946 22.4804 17 22.7348 17 23V26C17 26.2652 16.8946 26.5196 16.7071 26.7071C16.5196 26.8946 16.2652 27 16 27Z" fill="#263238"></path> <path d="M27 13C27 15.9174 25.8411 18.7153 23.7782 20.7782C21.7153 22.8411 18.9174 24 16 24C15.0893 23.9998 14.1823 23.8856 13.3 23.66C12.5276 23.4641 11.7796 23.1824 11.07 22.82C9.24766 21.9063 7.71506 20.5043 6.64322 18.7703C5.57138 17.0363 5.00248 15.0385 5 13C5 12.87 5 12.73 5 12.6C5.03746 11.7183 5.18528 10.8449 5.44 9.99998C6.17929 7.4644 7.8062 5.27947 10.0235 3.84441C12.2407 2.40935 14.9003 1.81997 17.5163 2.18397C20.1322 2.54797 22.5299 3.84105 24.2712 5.82692C26.0124 7.8128 26.981 10.3589 27 13Z" fill="#0277BD"></path> <path d="M22.93 28.63L21.73 25.63C21.6559 25.4439 21.5276 25.2844 21.3618 25.1721C21.196 25.0598 21.0003 24.9998 20.8 25H11.2C10.9997 24.9998 10.804 25.0598 10.6382 25.1721C10.4724 25.2844 10.3441 25.4439 10.27 25.63L9.06999 28.63C9.00954 28.7818 8.9872 28.9461 9.00492 29.1085C9.02265 29.2709 9.07989 29.4265 9.17165 29.5616C9.26341 29.6968 9.38689 29.8075 9.53129 29.8839C9.67569 29.9603 9.83662 30.0002 9.99999 30H22C22.1634 30.0002 22.3243 29.9603 22.4687 29.8839C22.6131 29.8075 22.7366 29.6968 22.8283 29.5616C22.9201 29.4265 22.9773 29.2709 22.9951 29.1085C23.0128 28.9461 22.9904 28.7818 22.93 28.63Z" fill="#263238"></path> <path d="M12.84 21.55C12.7633 21.6621 12.6647 21.7574 12.55 21.83L11.07 22.83C9.24615 21.9156 7.71254 20.512 6.6406 18.7761C5.56865 17.0401 5.00062 15.0403 5 13C5 12.87 5 12.73 5 12.6C5.03746 11.7184 5.18528 10.8449 5.44 10C6.81089 9.18658 8.26187 8.51638 9.77 8.00004C10.222 7.81354 10.7101 7.73108 11.1982 7.75877C11.6864 7.78647 12.162 7.92361 12.59 8.16004C14.03 9.22004 13.91 11.86 12.84 13.51C12.496 14.036 12.0507 14.4881 11.53 14.84C12.4853 15.08 13.3185 15.6639 13.87 16.48C14.57 17.76 14.23 19.4 12.84 21.55Z" fill="#7CB342"></path> <path d="M27 13C26.9993 14.643 26.6338 16.2654 25.93 17.75L25 17.67L24.77 17.62C22.43 16.84 19.94 15 19.69 13C19.43 10.81 20.47 8.14002 24.16 7.18002C24.3338 7.13514 24.5162 7.13514 24.69 7.18002L25.47 7.41002C26.4706 9.10309 26.9989 11.0334 27 13Z" fill="#558B2F"></path> <path d="M15 23V26C15 26.2652 15.1054 26.5196 15.2929 26.7071C15.4804 26.8946 15.7348 27 16 27V22C15.7348 22 15.4804 22.1054 15.2929 22.2929C15.1054 22.4804 15 22.7348 15 23Z" fill="#455A64"></path> <path d="M5.44 9.94C5.18028 10.8042 5.03241 11.6982 5 12.6C5 12.73 5 12.87 5 13C5.00248 15.0385 5.57138 17.0363 6.64322 18.7703C7.71506 20.5043 9.24766 21.9064 11.07 22.82C11.7796 23.1824 12.5276 23.4641 13.3 23.66C14.1823 23.8856 15.0893 23.9998 16 24V2C13.6174 2.00126 11.2995 2.77611 9.39516 4.208C7.49078 5.63989 6.10281 7.65141 5.44 9.94Z" fill="#039BE5"></path> <path d="M11.2 25C10.9997 24.9998 10.804 25.0598 10.6382 25.1721C10.4724 25.2844 10.3441 25.4439 10.27 25.63L9.06999 28.63C9.00954 28.7818 8.9872 28.9461 9.00492 29.1085C9.02265 29.2709 9.07989 29.4265 9.17165 29.5616C9.26341 29.6968 9.38689 29.8075 9.53129 29.8839C9.67569 29.9603 9.83662 30.0002 9.99999 30H16V25H11.2Z" fill="#455A64"></path> <path d="M12.84 21.55C12.7633 21.6621 12.6647 21.7574 12.55 21.83L11.07 22.83C9.24615 21.9156 7.71254 20.512 6.6406 18.7761C5.56865 17.0401 5.00062 15.0403 5 13C5 12.87 5 12.73 5 12.6C5.03746 11.7184 5.18528 10.8449 5.44 10C6.81089 9.18658 8.26187 8.51638 9.77 8.00004C10.222 7.81354 10.7101 7.73108 11.1982 7.75877C11.6864 7.78647 12.162 7.92361 12.59 8.16004C14.03 9.22004 13.91 11.86 12.84 13.51C12.496 14.036 12.0507 14.4881 11.53 14.84C12.4853 15.08 13.3185 15.6639 13.87 16.48C14.57 17.76 14.23 19.4 12.84 21.55Z" fill="#7CB342"></path> <path d="M16 2C13.8244 2 11.6977 2.64514 9.88873 3.85383C8.07979 5.06253 6.66989 6.7805 5.83733 8.79048C5.00477 10.8005 4.78693 13.0122 5.21137 15.146C5.6358 17.2798 6.68345 19.2398 8.22183 20.7782C9.76021 22.3166 11.7202 23.3642 13.854 23.7886C15.9878 24.2131 18.1995 23.9952 20.2095 23.1627C22.2195 22.3301 23.9375 20.9202 25.1462 19.1113C26.3549 17.3023 27 15.1756 27 13C27 10.0826 25.8411 7.28473 23.7782 5.22183C21.7153 3.15893 18.9174 2 16 2ZM16 22C14.22 22 12.4799 21.4722 10.9999 20.4832C9.51983 19.4943 8.36628 18.0887 7.68509 16.4442C7.0039 14.7996 6.82567 12.99 7.17294 11.2442C7.5202 9.49836 8.37737 7.89471 9.63604 6.63604C10.8947 5.37737 12.4984 4.5202 14.2442 4.17293C15.99 3.82567 17.7996 4.0039 19.4442 4.68508C21.0887 5.36627 22.4943 6.51983 23.4832 7.99987C24.4722 9.47991 25 11.22 25 13C25 15.3869 24.0518 17.6761 22.364 19.364C20.6761 21.0518 18.387 22 16 22Z" fill="#263238"></path> <path d="M21.73 25.63C21.6559 25.4439 21.5276 25.2844 21.3618 25.1721C21.196 25.0598 21.0003 24.9998 20.8 25H11.2C10.9997 24.9998 10.804 25.0598 10.6382 25.1721C10.4724 25.2844 10.3441 25.4439 10.27 25.63L9.06999 28.63C9.00954 28.7818 8.9872 28.9461 9.00492 29.1085C9.02265 29.2709 9.07989 29.4265 9.17165 29.5616C9.26341 29.6968 9.38689 29.8075 9.53129 29.8839C9.67569 29.9603 9.83662 30.0002 9.99999 30H22C22.1634 30.0002 22.3243 29.9603 22.4687 29.8839C22.6131 29.8075 22.7366 29.6968 22.8283 29.5616C22.9201 29.4265 22.9773 29.2709 22.9951 29.1085C23.0128 28.9461 22.9904 28.7818 22.93 28.63L21.73 25.63ZM11.48 28L11.88 27H20.12L20.52 28H11.48Z" fill="#263238"></path> </g>
                    </svg>
                    

                    <!-- close icon -->
                    <svg
                        class="swap-on fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 512 512">
                        <polygon
                        points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                    </svg>
                </label>

                <!-- Map Projection Dropdown -->
                <div class="dropdown dropdown-top">
                    <div tabindex="0" role="button" class="btn m-1">PROJ</div>
                    <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li v-for="spec in styleSpecs" :key="spec.url">
                          <a @click="changeMapStyle(spec.url)">{{ spec.name }}</a>
                        </li>
                    </ul>
                </div>

                <!-- Add all sensorthings button -->
                <button class="btn btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                </button>
            </div>
        </ClientOnly>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue'
import { Map as STAM } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { onMapLoad } from '#imports';
import { ClientOnly } from '#components';
import type { StaEntityType } from '~/layers/sta/modules/istsos/model/SensorThings.types';


const props = defineProps<{
  entitySet: StaEntityType[]
}>()

const features = ref<[]>([]);
const map = ref<STAM>();
const mapId = 'map';
const styleSpecs = ref<{ name: string; url: string }[]>([]);

const selectedStyle = ref({
    name: 'Web Mercator',
    url: 'https://demotiles.maplibre.org/style.json',
});

onMounted(async () => {
    try {
        const fetchedData = props.entitySet
    
        await nextTick(); // Wait for DOM to update and #map to exist
        const mapContainer = document.getElementById(mapId);
        if (!mapContainer) {
            console.error('Map container not found');
            return;
        }
        map.value = new STAM({
            container: mapId,
            style: selectedStyle.value.url,
            antialias: true,
            preserveDrawingBuffer: true
        })

        await onMapLoad(map.value)
        map.value.setProjection({
            type: 'mercator'
        });
        features.value = fetchedData
            .filter(foi => foi.feature)
            .map(foi => {
                if (foi.feature.geometry) {
                    return {
                    'type': foi.feature.type,
                    'geometry': foi.feature.geometry,
                    'properties': {}
                    }
                } else {
                    return {
                        'type': 'Feature',
                        'geometry': {
                            'type': foi.feature.type,
                            'coordinates': foi.feature.coordinates
                        },
                        'properties': {
                            
                        }
                    }
                }
            })

        map.value.addSource('sensorthings', {
            type: 'geojson',
            data: {
                'type': 'FeatureCollection',
                'features': features.value
            },
            cluster: true,
            clusterMaxZoom: 14,
            clusterRadius: 50
        })
        map.value.addLayer({
            'id': 'clusters',
            'type': 'circle',
            'source': 'sensorthings',
            'filter': ['has', 'point_count'],
            'paint': {
                // Use step expressions (https://maplibre.org/maplibre-style-spec/#expressions-step)
                // with three steps to implement three types of circles:
                //   * Blue, 20px circles when point count is less than 100
                //   * Yellow, 30px circles when point count is between 100 and 750
                //   * Pink, 40px circles when point count is greater than or equal to 750
                'circle-color': [
                    'step',
                    ['get', 'point_count'],
                    '#51bbd6',
                    100,
                    '#f1f075',
                    750,
                    '#f28cb1'
                ],
                'circle-radius': [
                    'step',
                    ['get', 'point_count'],
                    20,
                    100,
                    30,
                    750,
                    40
                ]
            }
        })
        map.value.addLayer({
            id: 'cluster-count',
            type: 'symbol',
            source: 'sensorthings',
            filter: ['has', 'point_count'],
            layout: {
                'text-field': '{point_count_abbreviated}',
                'text-size': 12
            }
        });

        map.value.addLayer({
            id: 'unclustered-point',
            type: 'circle',
            source: 'sensorthings',
            filter: ['!', ['has', 'point_count']],
            paint: {
                'circle-color': '#11b4da',
                'circle-radius': 4,
                'circle-stroke-width': 1,
                'circle-stroke-color': '#fff'
            }
        });
        const runtimeConfig = useRuntimeConfig();
        styleSpecs.value = [
        {
            name: 'Web Mercator',
            url: 'https://demotiles.maplibre.org/style.json',
        },
        {
            name: 'MapTiler',
            url: `https://api.maptiler.com/maps/satellite/style.json?key=${runtimeConfig.public.mapTilerApiKey}`
        }
        ];
    } catch (err: any) {
        console.error('Failed to fetch observation:', err);
    }

})

function changeMapStyle(styleUrl: string) {
    if (map.value) {
        map.value.setStyle(styleUrl);
    }
}

function toggleMapProjection() {
    map.value?.setProjection({
        type:  map.value.style.projection?.name === 'mercator' ? 'globe' : 'mercator'
    })
}


</script>

<style>
.map-container {
    width: 84%;
    height: 720px; /* Set desired height */
}

</style>
