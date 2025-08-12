import type { StaEntityType } from "../../modules/istsos/model/SensorThings.types";
import type { SensorThingsRepository } from "../../modules/istsos/repository/SensorThingsRepository";


export default class SensorThings {
    repository: SensorThingsRepository;
    
    constructor(_repository: SensorThingsRepository) {
        this.repository = _repository;
    }

    async getbyId(entity: StaEntityType, id: number): Promise<StaEntityType> {
        return this.repository.getOneOfEntityType(entity, id);
    }
    
    async getbyType(entity: StaEntityType): Promise<StaEntityType[]> {
        return this.repository.getAllEntityType(entity);
    }

    async getbyLinkedEntity(entity: StaEntityType, id: number, 
        lentity: StaEntityType): Promise<StaEntityType> {
        return this.repository.getLinkedEntity(entity, id, lentity);
    }

    async getbyLinkedEntitySet(entity: StaEntityType, id: number,
        lentity: StaEntityType): Promise<StaEntityType[]> {
        return this.repository.getLinkedEntitySet(entity, id, lentity);
    }
}