import { AxiosRepository } from "@pinia-orm/axios";
import type { EntityType } from "../model/SensorThings.types";

export class AxiosSTARepository<M extends EntityType = EntityType> extends AxiosRepository<M>{};
