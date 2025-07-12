import type { EntityType } from "../../model/SensorThings.types"
import type { SensorThings } from "#imports"

export interface GetOneOfEntityTypeUseCase {
    invoke: (entity: EntityType ,id: number) => Promise<EntityType>
}

export class GetOneOfEntityType implements GetOneOfEntityTypeUseCase {
    private STARepo: SensorThings
    constructor(_STARepo: SensorThings) {
        this.STARepo = _STARepo
    }

    async invoke(entity: EntityType ,id: number) {
        return this.STARepo.getbyId(entity, id)
    }
}