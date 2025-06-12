import { Sensor } from "../../model/Sensor";
import type { SensorRepository } from "../../repository/SensorRepository";

export interface GetSensorUseCase {
    invoke: (id: number) => Promise<Sensor>
}

export class GetSensor implements GetSensorUseCase {
    private sensorRepo: SensorRepository
    constructor(_sensorRepo: SensorRepository) {
        this.sensorRepo = _sensorRepo
    }

    async invoke(id: number) {
        return this.sensorRepo.getSensor(id)
    }
}