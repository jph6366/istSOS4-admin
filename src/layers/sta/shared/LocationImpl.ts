import type { istSOSLocation } from "./types/istSOSLocation";
import { useAxiosRepo } from "@pinia-orm/axios";
import { Location } from "../modules/istsos/model/Location";

export default class LocationImpl implements istSOSLocation {
    async getLocation(id: number): Promise<Location> {
        const axiosUrl = `api/${Location.entity}(${id})`
        try {
            const result = await useAxiosRepo(Location).api().request({
                method: 'get',
                url: axiosUrl
            })
            return await result.response.data as Location;
        } catch (error) {
            throw error;
        }
    }
    async getAll(): Promise<Location[]> {
        const axiosUrl = `api/${Location.entity}`;
        try {
            const result = await useAxiosRepo(Location).api().request({
                method: 'get',
                url: axiosUrl
            })
            return await result.response.data.value as Location[];
        } catch (error) {
            throw error;
        }
    }
}