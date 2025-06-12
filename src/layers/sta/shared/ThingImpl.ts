import type { istSOSThing } from "./types/istSOSThing";
import { useAxiosRepo } from "@pinia-orm/axios";
import { Thing } from "../modules/istsos/model/Thing";

export default class ThingImpl implements istSOSThing {
    async getThing(id: number): Promise<Thing> {
        const axiosUrl = `api/${Thing.entity}(${id})`
        try {
            const result = await useAxiosRepo(Thing).api().request({
                method: 'get',
                url: axiosUrl
            })
            return await result.response.data as Thing;
        } catch (error) {
            throw error;
        }
    }
    async getAll(): Promise<Thing[]> {
        const axiosUrl = `api/${Thing.entity}`;
        try {
            const result = await useAxiosRepo(Thing).api().request({
                method: 'get',
                url: axiosUrl
            })
            return await result.response.data.value as Thing[];
        } catch (error) {
            throw error;
        }
    }
}