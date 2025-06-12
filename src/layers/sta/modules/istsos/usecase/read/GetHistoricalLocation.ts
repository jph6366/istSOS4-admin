import { HistoricalLocation  } from "../../model/HistoricalLocation";
import type { HistoricalLocationRepository } from "../../repository/HistoricalLocationRepository";

export interface GetHistoricalLocationUseCase {
    invoke: (id: number) => Promise<HistoricalLocation>
}

export class GetHistoricalLocation implements GetHistoricalLocationUseCase {
    private historicalLocationRepo: HistoricalLocationRepository
    constructor(_historicalLocationRepo: HistoricalLocationRepository) {
        this.historicalLocationRepo = _historicalLocationRepo
    }

    async invoke(id: number) {
        return this.historicalLocationRepo.getHistoricalLocation(id)
    }
}
