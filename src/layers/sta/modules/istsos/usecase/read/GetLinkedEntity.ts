import type { EntityType } from "../../model/SensorThings.types"
import type { SensorThings } from "#imports"

export interface GetLinkedEntityTypeUseCase {
    invoke: (entity: EntityType ,id: number, lentity: EntityType) => Promise<EntityType>
}

export class GetLinkedEntityType implements GetLinkedEntityTypeUseCase {
    private STARepo: SensorThings
    constructor(_STARepo: SensorThings) {
        this.STARepo = _STARepo
    }

    async invoke(entity: EntityType ,id: number, lentity: EntityType) {
        return this.STARepo.getbyLinkedEntity(entity, id, lentity)
    }
}