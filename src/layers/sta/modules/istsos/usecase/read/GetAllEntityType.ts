import type { SensorThings } from "#imports";
import type { EntityType } from "../../model/SensorThings.types";
import type { SensorThingsRepository } from "../../repository/SensorThingsRepository";

export interface GetAllEntityTypeUseCase {
    invoke: (entity: EntityType) => Promise<EntityType[]>;
}

export class GetAllEntityType implements GetAllEntityTypeUseCase {
    private STARepo: SensorThings;
    constructor(_STARepo: SensorThings) {
        this.STARepo = _STARepo;
    }

    async invoke(entity: EntityType): Promise<EntityType[]> {
        return this.STARepo.getbyType(entity);
    }
}
