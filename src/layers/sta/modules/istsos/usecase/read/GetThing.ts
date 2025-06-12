import { Thing } from "../../model/Thing";
import type { ThingRepository } from "../../repository/ThingRepository";

export interface GetThingUseCase {
    invoke: (id: number) => Promise<Thing>
}

export class GetThing implements GetThingUseCase {
    private thingRepo: ThingRepository
    constructor(_thingRepo: ThingRepository) {
        this.thingRepo = _thingRepo
    }

    async invoke(id: number) {
        return this.thingRepo.getThing(id)
    }
}