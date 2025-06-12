import { ObservedProperty } from "../model/ObservedProperty";

export interface ObservedPropertyRepository {
    getObservedProperty(id: number): Promise<ObservedProperty>;
    getAll(): Promise<ObservedProperty[]>;
}
