import { Model, useRepo } from "pinia-orm";
import type { StaEntityType } from "../modules/istsos/model/SensorThings.types";
import type { SensorThingsRepository } from "../modules/istsos/repository/SensorThingsRepository";

export default class SensorThingsDemo implements SensorThingsRepository {

    async getAllEntityType(entity: StaEntityType): Promise<StaEntityType[]> {
        const axiosUrl = `${entity.entity}`
        
        try{
            const { $usgs_water } = useNuxtApp()
            const { data }: any = await useFetch(axiosUrl, {
                $fetch: $usgs_water
            })
            return data.value
        } catch(error) {
            throw error;
        }
    }

    async getOneOfEntityType(entity: StaEntityType, id: number): Promise<StaEntityType> {

        const axiosUrl = `${entity.entity}/${id}/`     
        try{
            // const result = await useAxiosSTARepo(entity as unknown as typeof Model).api().request({
                // method: 'get',
                // url: axiosUrl
            // })
            const resEntity: typeof entity = await $fetch(axiosUrl);
            // const res = await result.response.data; 
            // return res;
            return resEntity
        } catch(error) {
            throw error;
        }
    }

    async getLinkedEntity(entity: StaEntityType, id: number, 
        lentity: StaEntityType): Promise<StaEntityType> {
        const axiosUrl = `${entity.entity}(${id})/${lentity.entity}`        
        try{
            // const result = await useAxiosSTARepo(entity as unknown as typeof Model).api().request({
            //     method: 'get',
            //     url: axiosUrl
            // })

            const resEntity: typeof entity = await $fetch(axiosUrl);
            // const res = await result.response.data; 
            // return res;
            return resEntity;
        } catch(error) {
            throw error;
        }
    }

    async getLinkedEntitySet(entity: StaEntityType, id: number, 
        lentity: StaEntityType): Promise<StaEntityType[]> {
        const axiosUrl = `${entity.entity}(${id})/${lentity.entity}`
        try{
            // const result = await useAxiosSTARepo(entity as unknown as typeof Model).api().request({
            //     method: 'get',
            //     url: axiosUrl                   
            // })

            const entitySet: typeof entity[] = await $fetch(axiosUrl);
            // const res = await result.response.data; 
            // return res;
            return entitySet
        } catch(error) {
            throw error;
        }
    }
    
}