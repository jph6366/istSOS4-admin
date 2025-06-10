import { Observation } from "../model/Observation";

export interface ObservationRepository {
    getObservation(id: number): Promise<Observation>
}