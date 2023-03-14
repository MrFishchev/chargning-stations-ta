import * as stationTypeDal from '../../db/dal/stationTypes'
import {
  StationTypeInput,
  StationTypeOutput
} from '../../db/models/StationType'

export const getAll = (): Promise<StationTypeOutput[]> => {
  return stationTypeDal.getAll()
}

export const getById = (id: number): Promise<StationTypeOutput> => {
  return stationTypeDal.getById(id)
}

export const create = (
  payload: StationTypeInput
): Promise<StationTypeOutput> => {
  return stationTypeDal.create(payload)
}

export const update = (
  id: number,
  payload: Partial<StationTypeInput>
): Promise<StationTypeOutput> => {
  return stationTypeDal.update(id, payload)
}

export const deleteById = (id: number): Promise<boolean> => {
  return stationTypeDal.deleteById(id)
}
