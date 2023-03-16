import * as stationTypeDal from '../../db/dal/stationTypes'
import { StationType } from '../../db/models'

export const getAll = (): Promise<StationType[]> => {
  return stationTypeDal.getAll()
}

export const getById = (id: number): Promise<StationType> => {
  return stationTypeDal.getById(id)
}

export const create = (payload: StationType): Promise<StationType> => {
  return stationTypeDal.create(payload)
}

export const update = (
  id: number,
  payload: Partial<StationType>
): Promise<StationType> => {
  return stationTypeDal.update(id, payload)
}

export const deleteById = (id: number): Promise<boolean> => {
  return stationTypeDal.deleteById(id)
}
