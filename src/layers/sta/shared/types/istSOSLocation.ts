import type { Location } from "../../modules/istsos/model/Location";

export interface istSOSLocation {
    getLocation(id: number): Promise<Location>;
    getAll(): Promise<Location[]>;
}