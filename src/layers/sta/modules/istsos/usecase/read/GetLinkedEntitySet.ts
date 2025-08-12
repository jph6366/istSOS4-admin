import type { SensorThings } from "#imports";
import type { StaEntityType } from "../../model/SensorThings.types";
import type { SensorThingsRepository } from "../../repository/SensorThingsRepository";

export interface GetLinkedEntitySetUseCase {
    invoke: (entity: StaEntityType, id: number, lentity: StaEntityType) => Promise<StaEntityType[]>;
}

export class GetLinkedEntitySet implements GetLinkedEntitySetUseCase {
    private STARepo: SensorThings;
    constructor(_STARepo: SensorThings) {
        this.STARepo = _STARepo;
    }

    async invoke(entity: StaEntityType, id: number, lentity: StaEntityType): Promise<StaEntityType[]> {
        return this.STARepo.getbyLinkedEntitySet(entity, id, lentity);
    }
}
