import { Sensor } from "../model/Sensor";

export interface SensorRepository {
    getSensor(id: number): Promise<Sensor>;
    getAll(): Promise<Sensor[]>;
}
