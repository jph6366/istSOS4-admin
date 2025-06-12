import type { Thing } from "../../modules/istsos/model/Thing";
import type { ThingRepository } from "../../modules/istsos/repository/ThingRepository";
import type { istSOSThing } from "../types/istSOSThing";

export default class Things implements ThingRepository {
    repository: istSOSThing;
    constructor(_repository: istSOSThing) {
        this.repository = _repository;
    }
    async getThing(id: number): Promise<Thing> {
        return this.repository.getThing(id);
    }
    async getAll(): Promise<Thing[]> {
        return this.repository.getAll();
    }
}