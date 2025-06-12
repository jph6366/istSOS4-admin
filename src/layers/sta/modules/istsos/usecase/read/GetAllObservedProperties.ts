import type { ObservedProperty } from "../../model/ObservedProperty";
import type { ObservedPropertyRepository } from "../../repository/ObservedPropertyRepository";

export interface GetAllObservedPropertiesUseCase {
    invoke: () => Promise<ObservedProperty[]>;
}

export class GetAllObservedProperties implements GetAllObservedPropertiesUseCase {
    private observedPropertyRepo: ObservedPropertyRepository;
    constructor(_observedPropertyRepo: ObservedPropertyRepository) {
        this.observedPropertyRepo = _observedPropertyRepo;
    }

    async invoke(): Promise<ObservedProperty[]> {
        return this.observedPropertyRepo.getAll();
    }
}
