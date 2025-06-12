import type { Location } from "../../model/Location";
import type { LocationRepository } from "../../repository/LocationRepository";

export interface GetAllLocationsUseCase {
    invoke: () => Promise<Location[]>;
}

export class GetAllLocations implements GetAllLocationsUseCase {
    private locationRepo: LocationRepository;
    constructor(_locationRepo: LocationRepository) {
        this.locationRepo = _locationRepo;
    }

    async invoke(): Promise<Location[]> {
        return this.locationRepo.getAll();
    }
}
