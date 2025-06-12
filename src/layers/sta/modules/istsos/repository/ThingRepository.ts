import { Thing } from "../model/Thing";

export interface ThingRepository {
    getThing(id: number): Promise<Thing>;
    getAll(): Promise<Thing[]>;
}