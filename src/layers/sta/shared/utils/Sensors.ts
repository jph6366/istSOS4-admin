import type { Sensor } from "../../modules/istsos/model/Sensor";
import type { SensorRepository } from "../../modules/istsos/repository/SensorRepository";
import type { istSOSSensor } from "../types/istSOSSensor";

export default class Sensors implements SensorRepository {
    repository: istSOSSensor;
    constructor(_repository: istSOSSensor) {
        this.repository = _repository;
    }
    async getSensor(id: number): Promise<Sensor> {
        return this.repository.getSensor(id);
    }
    async getAll(): Promise<Sensor[]> {
        return this.repository.getAll();
    }
}
