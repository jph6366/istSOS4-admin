import { Location } from "../model/Location";

export interface LocationRepository {
    getLocation(id: number): Promise<Location>;
    getAll(): Promise<Location[]>;
}
