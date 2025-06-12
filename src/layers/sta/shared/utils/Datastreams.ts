import type { Datastream } from "../../modules/istsos/model/Datastream";
import type { DatastreamRepository } from "../../modules/istsos/repository/DatastreamRepository";
import type { istSOSDatastream } from "../types/istSOSDatastream";

export default class Datastreams implements DatastreamRepository {
    repository: istSOSDatastream;
    constructor(_repository: istSOSDatastream) {
        this.repository = _repository;
    }
    async getDatastream(id: number): Promise<Datastream> {
        return this.repository.getDatastream(id);
    }
    async getAll(): Promise<Datastream[]> {
        return this.repository.getAll();
    }
}