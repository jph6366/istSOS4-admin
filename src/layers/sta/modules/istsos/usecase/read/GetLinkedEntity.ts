import type { StaEntityType } from "../../model/SensorThings.types"
import type { SensorThings } from "#imports"

export interface GetLinkedEntityTypeUseCase {
    invoke: (entity: StaEntityType ,id: number, lentity: StaEntityType) => Promise<StaEntityType>
}

export class GetLinkedEntityType implements GetLinkedEntityTypeUseCase {
    private STARepo: SensorThings
    constructor(_STARepo: SensorThings) {
        this.STARepo = _STARepo
    }

    async invoke(entity: StaEntityType ,id: number, lentity: StaEntityType) {
        return this.STARepo.getbyLinkedEntity(entity, id, lentity)
    }
}