import { Observation } from "../../modules/istsos/model/Observation"

export interface istSOSObservation {
    getObservation(id: number): Promise<Observation>
    getAll(): Promise<Observation[]>;
}