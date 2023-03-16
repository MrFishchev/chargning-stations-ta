import * as service from '../../services/StationService'
import { GetAllStationsFilter } from '../../../db/filters/stations'
import { Station } from '../../../db/models/Station'

export const getAll = async (
  filter?: GetAllStationsFilter
): Promise<Station[]> => {
  return await service.getAll(filter)
}

export const getById = async (id: number): Promise<Station> => {
  return await service.getById(id)
}

export const create = async (payload: Station): Promise<Station> => {
  return await service.create(payload)
}

export const update = async (
  id: number,
  payload: Station
): Promise<Station> => {
  return await service.update(id, payload)
}

export const deleteById = async (id: number): Promise<boolean> => {
  return await service.deleteById(id)
}
