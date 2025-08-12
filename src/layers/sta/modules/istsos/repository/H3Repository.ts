import { Model, Repository, config } from 'pinia-orm'
import * as H3 from 'h3'
export class H3Repository<M extends Model = Model> extends Repository<M> {
    
}
