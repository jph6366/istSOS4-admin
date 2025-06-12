import type { istSOSObservation } from "./types/istSOSObservation";
import { useAxiosRepo } from "@pinia-orm/axios";
import { Observation } from "../modules/istsos/model/Observation";

export default class ObservationImpl implements istSOSObservation {

    async getObservation(id: number): Promise<Observation> {
        const axiosUrl = `api/${Observation.entity}(${id})`
        
        try{
            const result = await useAxiosRepo(Observation).api().request({
                method: 'get',
                url: axiosUrl
            })
            return await result.response.data as Observation;
        } catch(error) {
            throw error;
        }
    }
    
    async getAll(): Promise<Observation[]> {
        const axiosUrl = `api/${Observation.entity}`;
        try {
            const result = await useAxiosRepo(Observation).api().request({
                method: 'get',
                url: axiosUrl
            })
            return await result.response.data.value as Observation[];
        } catch (error) {
            throw error;
        }
    }
}