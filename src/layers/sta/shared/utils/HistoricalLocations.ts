import type { HistoricalLocation } from "../../modules/istsos/model/HistoricalLocation";
import type { HistoricalLocationRepository } from "../../modules/istsos/repository/HistoricalLocationRepository";
import type { istSOSHistoricalLocation } from "../types/istSOSHistoricalLocation";

export default class HistoricalLocations implements HistoricalLocationRepository {
    repository: istSOSHistoricalLocation;
    constructor(_repository: istSOSHistoricalLocation) {
        this.repository = _repository;
    }
    async getHistoricalLocation(id: number): Promise<HistoricalLocation> {
        return this.repository.getHistoricalLocation(id);
    }
    async getAll(): Promise<HistoricalLocation[]> {
        return this.repository.getAll();
    }
}