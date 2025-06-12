import { FeatureOfInterest } from "../model/FeatureOfInterest";

export interface FeatureOfInterestRepository {
    getFeatureOfInterest(id: number): Promise<FeatureOfInterest>
}