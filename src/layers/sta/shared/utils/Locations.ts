import type { Location } from "../../modules/istsos/model/Location";
import type { LocationRepository } from "../../modules/istsos/repository/LocationRepository";
import type { istSOSLocation } from "../types/istSOSLocation";

export default class Locations implements LocationRepository {
    repository: istSOSLocation;
    constructor(_repository: istSOSLocation) {
        this.repository = _repository;
    }
    async getLocation(id: number): Promise<Location> {
        return this.repository.getLocation(id);
    }
    async getAll(): Promise<Location[]> {
        return this.repository.getAll();
    }
}