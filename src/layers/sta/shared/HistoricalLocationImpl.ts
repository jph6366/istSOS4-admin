import type { istSOSHistoricalLocation } from "./types/istSOSHistoricalLocation";
import { useAxiosRepo } from "@pinia-orm/axios";
import { HistoricalLocation } from "../modules/istsos/model/HistoricalLocation";

export default class HistoricalLocationImpl implements istSOSHistoricalLocation {
    async getHistoricalLocation(id: number): Promise<HistoricalLocation> {
        const axiosUrl = `api/${HistoricalLocation.entity}(${id})`
        try {
            const result = await useAxiosRepo(HistoricalLocation).api().request({
                method: 'get',
                url: axiosUrl
            })
            return await result.response.data as HistoricalLocation;
        } catch (error) {
            throw error;
        }
    }
    async getAll(): Promise<HistoricalLocation[]> {
        const axiosUrl = `api/${HistoricalLocation.entity}`;
        try {
            const result = await useAxiosRepo(HistoricalLocation).api().request({
                method: 'get',
                url: axiosUrl
            })
            return await result.response.data.value as HistoricalLocation[];
        } catch (error) {
            throw error;
        }
    }
}