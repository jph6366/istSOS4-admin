import { Observation } from "../../modules/istsos/model/Observation";
import type { ObservationRepository } from "../../modules/istsos/repository/ObservationRepository";
import type { istSOSObservation } from "../types/istSOSObservation";


export default class Observations implements ObservationRepository {
    repository: istSOSObservation;
    
    constructor(_repository: istSOSObservation) {
        this.repository = _repository;
    }

    async getObservation(id: number): Promise<Observation> {
        return this.repository.getObservation(id);
    }
    
    async getAll(): Promise<Observation[]> {
        return this.repository.getAll();
    }
    
}