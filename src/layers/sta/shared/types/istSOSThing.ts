import type { Thing } from "../../modules/istsos/model/Thing";

export interface istSOSThing {
    getThing(id: number): Promise<Thing>;
    getAll(): Promise<Thing[]>;
}