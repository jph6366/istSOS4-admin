import type { StaEntityType } from "../model/SensorThings.types";

export interface SensorThingsRepository {
    getOneOfEntityType(entity: StaEntityType, id: number): Promise<StaEntityType>
    getAllEntityType(entity: StaEntityType): Promise<StaEntityType[]>
    getLinkedEntity(entity: StaEntityType, id: number, lentity: StaEntityType): Promise<StaEntityType>
    getLinkedEntitySet(entity: StaEntityType, id: number, lentity: StaEntityType): Promise<StaEntityType[]>
}


