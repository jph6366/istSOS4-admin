import type { SensorThings } from "#imports";
import type { StaEntityType } from "../../model/SensorThings.types";
import type { SensorThingsRepository } from "../../repository/SensorThingsRepository";

export interface GetAllEntityTypeUseCase {
    invoke: (entity: StaEntityType) => Promise<StaEntityType[]>;
}

export class GetAllEntityType implements GetAllEntityTypeUseCase {
    private STARepo: SensorThings;
    constructor(_STARepo: SensorThings) {
        this.STARepo = _STARepo;
    }

    async invoke(entity: StaEntityType): Promise<StaEntityType[]> {
        return this.STARepo.getbyType(entity);
    }
}
