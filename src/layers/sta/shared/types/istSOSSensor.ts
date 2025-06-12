import type { Sensor } from "../../modules/istsos/model/Sensor";

export interface istSOSSensor {
    getSensor(id: number): Promise<Sensor>;
    getAll(): Promise<Sensor[]>;
}