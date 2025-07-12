import type { Constructor, Model } from 'pinia-orm'
import { useRepo } from 'pinia-orm'
import { getActivePinia } from 'pinia'
import { AxiosSTARepository } from '../../modules/istsos/repository/AxiosSTARepositoryt'
import type { EntityType } from '../../modules/istsos/model/SensorThings.types'
export function useAxiosSTARepo<M extends EntityType> (model: Constructor<M>) {
  const pinia = getActivePinia()
  AxiosSTARepository.useModel = model as unknown as typeof Model
  return useRepo(AxiosSTARepository<EntityType>, pinia)
}