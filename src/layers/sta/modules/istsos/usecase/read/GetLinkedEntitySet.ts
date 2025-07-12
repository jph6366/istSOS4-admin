import type { SensorThings } from "#imports";
import type { EntityType } from "../../model/SensorThings.types";
import type { SensorThingsRepository } from "../../repository/SensorThingsRepository";

export interface GetLinkedEntitySetUseCase {
    invoke: (entity: EntityType, id: number, lentity: EntityType) => Promise<EntityType[]>;
}

export class GetLinkedEntitySet implements GetLinkedEntitySetUseCase {
    private STARepo: SensorThings;
    constructor(_STARepo: SensorThings) {
        this.STARepo = _STARepo;
    }

    async invoke(entity: EntityType, id: number, lentity: EntityType): Promise<EntityType[]> {
        return this.STARepo.getbyLinkedEntitySet(entity, id, lentity);
    }
}
