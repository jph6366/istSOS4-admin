import type { EntityType } from "../../modules/istsos/model/SensorThings.types";
import type { SensorThingsRepository } from "../../modules/istsos/repository/SensorThingsRepository";


export default class SensorThings {
    repository: SensorThingsRepository;
    
    constructor(_repository: SensorThingsRepository) {
        this.repository = _repository;
    }

    async getbyId(entity: EntityType, id: number): Promise<EntityType> {
        return this.repository.getOneOfEntityType(entity, id);
    }
    
    async getbyType(entity: EntityType): Promise<EntityType[]> {
        return this.repository.getAllEntityType(entity);
    }

    async getbyLinkedEntity(entity: EntityType, id: number, 
        lentity: EntityType): Promise<EntityType> {
        return this.repository.getLinkedEntity(entity, id, lentity);
    }

    async getbyLinkedEntitySet(entity: EntityType, id: number,
        lentity: EntityType): Promise<EntityType[]> {
        return this.repository.getLinkedEntitySet(entity, id, lentity);
    }
}