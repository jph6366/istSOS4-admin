import type { ObservedProperty } from "../../modules/istsos/model/ObservedProperty";
import type { ObservedPropertyRepository } from "../../modules/istsos/repository/ObservedPropertyRepository";
import type { istSOSObservedProperty } from "../types/istSOSObservedProperty";

export default class ObservedProperties implements ObservedPropertyRepository {
    repository: istSOSObservedProperty;
    constructor(_repository: istSOSObservedProperty) {
        this.repository = _repository;
    }
    async getObservedProperty(id: number): Promise<ObservedProperty> {
        return this.repository.getObservedProperty(id);
    }
    async getAll(): Promise<ObservedProperty[]> {
        return this.repository.getAll();
    }
}
