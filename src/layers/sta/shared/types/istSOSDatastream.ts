import type { Datastream } from "../../modules/istsos/model/Datastream";

export interface istSOSDatastream {
    getDatastream(id: number): Promise<Datastream>;
    getAll(): Promise<Datastream[]>;
}