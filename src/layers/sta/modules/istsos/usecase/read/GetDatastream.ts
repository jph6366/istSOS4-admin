import { Datastream } from "../../model/Datastream";
import type { DatastreamRepository } from "../../repository/DatastreamRepository";

export interface GetDatastreamUseCase {
    invoke: (id: number) => Promise<Datastream>
}

export class GetDatastream implements GetDatastreamUseCase {
    private datastreamRepo: DatastreamRepository
    constructor(_datastreamRepo: DatastreamRepository) {
        this.datastreamRepo = _datastreamRepo
    }

    async invoke(id: number) {
        return this.datastreamRepo.getDatastream(id)
    }
}
