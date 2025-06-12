import { FeatureOfInterest  } from "../../model/FeatureOfInterest";
import type { FeatureOfInterestRepository } from "../../repository/FeatureOfInterestRepository";

export interface GetFeatureOfInterestUseCase {
    invoke: (id: number) => Promise<FeatureOfInterest>
}

export class GetFeatureOfInterest implements GetFeatureOfInterestUseCase {
    private featureOfInterestRepo: FeatureOfInterestRepository
    constructor(_featureOfInterestRepo: FeatureOfInterestRepository) {
        this.featureOfInterestRepo = _featureOfInterestRepo
    }

    async invoke(id: number) {
        return this.featureOfInterestRepo.getFeatureOfInterest(id)
    }
}