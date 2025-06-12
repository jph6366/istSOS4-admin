import type { HistoricalLocation } from "../../modules/istsos/model/HistoricalLocation";

export interface istSOSHistoricalLocation {
    getHistoricalLocation(id: number): Promise<HistoricalLocation>;
    getAll(): Promise<HistoricalLocation[]>;
}