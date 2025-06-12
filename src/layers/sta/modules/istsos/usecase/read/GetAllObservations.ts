import type { Observation } from "../../model/Observation";
import type { ObservationRepository } from "../../repository/ObservationRepository";

export interface GetAllObservationsUseCase {
    invoke: () => Promise<Observation[]>;
}

export class GetAllObservations implements GetAllObservationsUseCase {
    private observationRepo: ObservationRepository;
    constructor(_observationRepo: ObservationRepository) {
        this.observationRepo = _observationRepo;
    }

    async invoke(): Promise<Observation[]> {
        return this.observationRepo.getAll();
    }
}
