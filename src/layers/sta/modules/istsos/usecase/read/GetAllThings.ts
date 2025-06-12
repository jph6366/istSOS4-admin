import type { Thing } from "../../model/Thing";
import type { ThingRepository } from "../../repository/ThingRepository";

export interface GetAllThingsUseCase {
    invoke: () => Promise<Thing[]>;
}

export class GetAllThings implements GetAllThingsUseCase {
    private thingRepo: ThingRepository;
    constructor(_thingRepo: ThingRepository) {
        this.thingRepo = _thingRepo;
    }

    async invoke(): Promise<Thing[]> {
        return this.thingRepo.getAll();
    }
}
