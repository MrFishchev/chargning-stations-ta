import { GetAllStationsFilter } from '../../db/dal/filters/stations'
import * as stationDal from '../../db/dal/stations'
import { StationInput, StationOutput } from '../../db/models/Station'

export const getAll = (
  filter?: GetAllStationsFilter
): Promise<StationOutput[]> => {
  return stationDal.getAll(filter)
}

export const getById = (id: number): Promise<StationOutput> => {
  return stationDal.getById(id)
}

export const create = (payload: StationInput): Promise<StationOutput> => {
  return stationDal.create(payload)
}

export const update = (
  id: number,
  payload: Partial<StationInput>
): Promise<StationOutput> => {
  return stationDal.update(id, payload)
}

export const deleteById = (id: number): Promise<boolean> => {
  return stationDal.deleteById(id)
}
