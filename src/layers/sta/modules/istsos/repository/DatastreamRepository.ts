import { Datastream } from "../model/Datastream";

export interface DatastreamRepository {
    getDatastream(id: number): Promise<Datastream>;
    getAll(): Promise<Datastream[]>;
}
