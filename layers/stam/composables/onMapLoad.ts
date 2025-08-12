import type {Map as MGL, MapLibreEvent } from 'maplibre-gl';


export function onMapLoad(map: MGL): Promise<MapLibreEvent> {
    return new Promise((resolve, reject) => {
        map.on("load", (e) => {
            if (e == null) {
                reject(new Error("failed to load map"));
            }
            resolve(e);
        });
    });
};