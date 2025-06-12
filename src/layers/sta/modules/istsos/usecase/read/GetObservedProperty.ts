import { ObservedProperty } from "../../model/ObservedProperty";
import type { ObservedPropertyRepository } from "../../repository/ObservedPropertyRepository";

export interface GetObservedPropertyUseCase {
    invoke: (id: number) => Promise<ObservedProperty>
}

export class GetObservedProperty implements GetObservedPropertyUseCase {
    private observedPropertyRepo: ObservedPropertyRepository
    constructor(_observedPropertyRepo: ObservedPropertyRepository) {
        this.observedPropertyRepo = _observedPropertyRepo
    }

    async invoke(id: number) {
        return this.observedPropertyRepo.getObservedProperty(id)
    }
}