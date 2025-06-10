import type { istSOSObservation } from "../types/istSOSObservation";
import { Observation } from "../../modules/istsos/model/Observation";
import { useAxiosRepo } from "@pinia-orm/axios";

export default class istSOSObservationImpl implements istSOSObservation {

    async getObservation(id: number): Promise<Observation> {
        const axiosUrl = `api/${Observation.entity}(${id})`
        
        try{
            const result = await useAxiosRepo(Observation).api().request({
                // dataKey: 'data'
                method: 'get',
                url: axiosUrl
            })
            return await result.response.data as Observation;
        } catch(error) {
            throw error;
        }
    }
    
}