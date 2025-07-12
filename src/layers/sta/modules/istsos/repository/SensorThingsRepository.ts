import type { EntityType } from "../model/SensorThings.types";

export interface SensorThingsRepository {
    getOneOfEntityType(entity: EntityType, id: number): Promise<EntityType>
    getAllEntityType(entity: EntityType): Promise<EntityType[]>
    getLinkedEntity(entity: EntityType, id: number, lentity: EntityType): Promise<EntityType>
    getLinkedEntitySet(entity: EntityType, id: number, lentity: EntityType): Promise<EntityType[]>
}


