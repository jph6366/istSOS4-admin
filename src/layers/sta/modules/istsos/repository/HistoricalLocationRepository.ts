import { HistoricalLocation } from "../model/HistoricalLocation";

export interface HistoricalLocationRepository {
    getHistoricalLocation(id: number): Promise<HistoricalLocation>;
    getAll(): Promise<HistoricalLocation[]>;
}
