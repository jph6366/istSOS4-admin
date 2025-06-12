import type { ObservedProperty } from "../../modules/istsos/model/ObservedProperty";

export interface istSOSObservedProperty {
    getObservedProperty(id: number): Promise<ObservedProperty>;
    getAll(): Promise<ObservedProperty[]>;
}