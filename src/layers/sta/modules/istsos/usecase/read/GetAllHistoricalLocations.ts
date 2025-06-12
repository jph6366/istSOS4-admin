import type { HistoricalLocation } from "../../model/HistoricalLocation";
import type { HistoricalLocationRepository } from "../../repository/HistoricalLocationRepository";

export interface GetAllHistoricalLocationsUseCase {
    invoke: () => Promise<HistoricalLocation[]>;
}

export class GetAllHistoricalLocations implements GetAllHistoricalLocationsUseCase {
    private historicalLocationRepo: HistoricalLocationRepository;
    constructor(_historicalLocationRepo: HistoricalLocationRepository) {
        this.historicalLocationRepo = _historicalLocationRepo;
    }

    async invoke(): Promise<HistoricalLocation[]> {
        return this.historicalLocationRepo.getAll();
    }
}
