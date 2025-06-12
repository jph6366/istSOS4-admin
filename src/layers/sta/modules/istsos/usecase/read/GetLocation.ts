import { Location } from "../../model/Location";
import type { LocationRepository } from "../../repository/LocationRepository";

export interface GetLocationUseCase {
    invoke: (id: number) => Promise<Location>
}

export class GetLocation implements GetLocationUseCase {
    private locationRepo: LocationRepository
    constructor(_locationRepo: LocationRepository) {
        this.locationRepo = _locationRepo
    }

    async invoke(id: number) {
        return this.locationRepo.getLocation(id)
    }
}