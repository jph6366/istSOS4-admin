import type { istSOSDatastream } from "./types/istSOSDatastream";
import { useAxiosRepo } from "@pinia-orm/axios";
import { Datastream } from "../modules/istsos/model/Datastream";

export default class DatastreamImpl implements istSOSDatastream {
    async getDatastream(id: number): Promise<Datastream> {
        const axiosUrl = `api/${Datastream.entity}(${id})`
        try {
            const result = await useAxiosRepo(Datastream).api().request({
                method: 'get',
                url: axiosUrl
            })
            return await result.response.data as Datastream;
        } catch (error) {
            throw error;
        }
    }
    async getAll(): Promise<Datastream[]> {
        const axiosUrl = `api/${Datastream.entity}`;
        try {
            const result = await useAxiosRepo(Datastream).api().request({
                method: 'get',
                url: axiosUrl
            })
            return await result.response.data.value as Datastream[];
        } catch (error) {
            throw error;
        }
    }
}