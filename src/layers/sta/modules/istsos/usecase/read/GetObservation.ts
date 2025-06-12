import { Observation } from "../../model/Observation";
import type { ObservationRepository } from "../../repository/ObservationRepository";

export interface GetObservationUseCase {
    invoke: (id: number) => Promise<Observation>
}

export class GetObservation implements GetObservationUseCase {
    private observationRepo: ObservationRepository
    constructor(_observationRepo: ObservationRepository) {
        this.observationRepo = _observationRepo
    }

    async invoke(id: number) {
        return this.observationRepo.getObservation(id)
    }
}