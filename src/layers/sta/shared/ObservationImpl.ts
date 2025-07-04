import type { istSOSObservation } from "./types/istSOSObservation";
import { useAxiosRepo } from "@pinia-orm/axios";
import { useRepo } from "pinia-orm";
import { Observation } from "../modules/istsos/model/Observation";

export default class ObservationImpl implements istSOSObservation {

    async getObservation(id: number): Promise<Observation> {
        const cacheKey = `observation_${id}`;
        
        // Check for cache hit - try to get from store first
        const cachedResult = useRepo(Observation).useCache(cacheKey).find(id);
        if (cachedResult) {
            return cachedResult;
        }
        
        // Cache miss - make API request without cache
        const axiosUrl = `api/${Observation.entity}(${id})?$expand=Datastream,FeatureOfInterest`        
        try{
            const result = await useAxiosRepo(Observation).api().request({
                method: 'get',
                url: axiosUrl
            })
            const observation = await result.response.data as Observation;
            
            // Save to store (which will also cache it)
            useRepo(Observation).save(observation);
            
            return observation;
        } catch(error) {
            throw error;
        }
    }
    
    async getAll(): Promise<Observation[]> {
        const cacheKey = 'all_observations';
        
        // Check for cache hit - try to get from store first
        const cachedResult = useRepo(Observation).useCache(cacheKey).get();
        if (cachedResult && cachedResult.length > 0) {
            return cachedResult;
        }
        
        // Cache miss - make API request without cache
        const axiosUrl = `api/${Observation.entity}`;
        try {
            const result = await useAxiosRepo(Observation).api().request({
                method: 'get',
                url: axiosUrl
            })
            const observations = await result.response.data.value as Observation[];
            
            // Save to store (which will also cache it)
            useRepo(Observation).save(observations);
            
            return observations;
        } catch (error) {
            throw error;
        }
    }
}