import { Model, useRepo } from "pinia-orm";
import type { EntityType } from "../modules/istsos/model/SensorThings.types";
import type { SensorThingsRepository } from "../modules/istsos/repository/SensorThingsRepository";

export default class SensorThingsImpl implements SensorThingsRepository {

    async getAllEntityType(entity: EntityType): Promise<EntityType[]> {
        const axiosUrl = `api/${entity.entity}`
        try{
            const result = await useAxiosSTARepo(entity as unknown as typeof Model).api().request({
                method: 'get',
                url: axiosUrl
            })
            const res = await result.response.data; 
            return res;
        } catch(error) {
            throw error;
        }
    }

    async getOneOfEntityType(entity: EntityType, id: number): Promise<EntityType> {

        const axiosUrl = `api/${entity.entity}(${id})`        
        try{
            const result = await useAxiosSTARepo(entity as unknown as typeof Model).api().request({
                method: 'get',
                url: axiosUrl
            })
            const res = await result.response.data; 
            return res;
        } catch(error) {
            throw error;
        }
    }

    async getLinkedEntity(entity: EntityType, id: number, 
        lentity: EntityType): Promise<EntityType> {
        const axiosUrl = `api/${entity.entity}(${id})/${lentity.entity}`        
        try{
            const result = await useAxiosSTARepo(entity as unknown as typeof Model).api().request({
                method: 'get',
                url: axiosUrl
            })
            const res = await result.response.data; 
            return res;
        } catch(error) {
            throw error;
        }
    }

    async getLinkedEntitySet(entity: EntityType, id: number, 
        lentity: EntityType): Promise<EntityType[]> {
        const axiosUrl = `api/${entity.entity}(${id})/${lentity.entity}`
        try{
            const result = await useAxiosSTARepo(entity as unknown as typeof Model).api().request({
                method: 'get',
                url: axiosUrl                   
            })
            const res = await result.response.data; 
            return res;
        } catch(error) {
            throw error;
        }
    }
    
}