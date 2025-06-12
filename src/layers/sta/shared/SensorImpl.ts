import type { istSOSSensor } from "./types/istSOSSensor";
import { useAxiosRepo } from "@pinia-orm/axios";
import { Sensor } from "../modules/istsos/model/Sensor";

export default class SensorImpl implements istSOSSensor {
    async getSensor(id: number): Promise<Sensor> {
        const axiosUrl = `api/${Sensor.entity}(${id})`
        try {
            const result = await useAxiosRepo(Sensor).api().request({
                method: 'get',
                url: axiosUrl
            })
            return await result.response.data as Sensor;
        } catch (error) {
            throw error;
        }
    }
    async getAll(): Promise<Sensor[]> {
        const axiosUrl = `api/${Sensor.entity}`;
        try {
            const result = await useAxiosRepo(Sensor).api().request({
                method: 'get',
                url: axiosUrl
            })
            return await result.response.data.value as Sensor[];
        } catch (error) {
            throw error;
        }
    }
}