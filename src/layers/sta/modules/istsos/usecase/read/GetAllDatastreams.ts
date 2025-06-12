import type { Datastream } from "../../model/Datastream";
import type { DatastreamRepository } from "../../repository/DatastreamRepository";

export interface GetAllDatastreamsUseCase {
    invoke: () => Promise<Datastream[]>;
}

export class GetAllDatastreams implements GetAllDatastreamsUseCase {
    private datastreamRepo: DatastreamRepository;
    constructor(_datastreamRepo: DatastreamRepository) {
        this.datastreamRepo = _datastreamRepo;
    }

    async invoke(): Promise<Datastream[]> {
        return this.datastreamRepo.getAll();
    }
}
