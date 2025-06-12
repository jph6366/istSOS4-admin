import type { Sensor } from "../../model/Sensor";
import type { SensorRepository } from "../../repository/SensorRepository";

export interface GetAllSensorsUseCase {
    invoke: () => Promise<Sensor[]>;
}

export class GetAllSensors implements GetAllSensorsUseCase {
    private sensorRepo: SensorRepository;
    constructor(_sensorRepo: SensorRepository) {
        this.sensorRepo = _sensorRepo;
    }

    async invoke(): Promise<Sensor[]> {
        return this.sensorRepo.getAll();
    }
}
