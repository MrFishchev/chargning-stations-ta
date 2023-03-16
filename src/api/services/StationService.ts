import { GetAllStationsFilter } from '../../db/filters/stations'
import * as stationDal from '../../db/dal/stations'
import { Station } from '../../db/models/Station'

export const getAll = (filter?: GetAllStationsFilter): Promise<Station[]> => {
  return stationDal.getAll(filter)
}

export const getById = (id: number): Promise<Station> => {
  return stationDal.getById(id)
}

export const create = (payload: Station): Promise<Station> => {
  return stationDal.create(payload)
}

export const update = (
  id: number,
  payload: Partial<Station>
): Promise<Station> => {
  return stationDal.update(id, payload)
}

export const deleteById = (id: number): Promise<boolean> => {
  return stationDal.deleteById(id)
}
