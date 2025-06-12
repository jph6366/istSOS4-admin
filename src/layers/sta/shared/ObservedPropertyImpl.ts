import type { istSOSObservedProperty } from "./types/istSOSObservedProperty";
import { useAxiosRepo } from "@pinia-orm/axios";
import { ObservedProperty } from "../modules/istsos/model/ObservedProperty";

export default class ObservedPropertyImpl implements istSOSObservedProperty {
    async getObservedProperty(id: number): Promise<ObservedProperty> {
        const axiosUrl = `api/${ObservedProperty.entity}(${id})`
        try {
            const result = await useAxiosRepo(ObservedProperty).api().request({
                method: 'get',
                url: axiosUrl
            })
            return await result.response.data as ObservedProperty;
        } catch (error) {
            throw error;
        }
    }
    async getAll(): Promise<ObservedProperty[]> {
        const axiosUrl = `api/${ObservedProperty.entity}`;
        try {
            const result = await useAxiosRepo(ObservedProperty).api().request({
                method: 'get',
                url: axiosUrl
            })
            return await result.response.data.value as ObservedProperty[];
        } catch (error) {
            throw error;
        }
    }
}