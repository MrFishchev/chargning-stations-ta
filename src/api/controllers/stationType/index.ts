import * as service from '../../services/StationTypeService'
import { StationType } from '../../../db/models/StationType'

export const getAll = async (): Promise<StationType[]> => {
  return await service.getAll()
}

export const getById = async (id: number): Promise<StationType> => {
  return await service.getById(id)
}

export const create = async (payload: StationType): Promise<StationType> => {
  return await service.create(payload)
}

export const update = async (
  id: number,
  payload: StationType
): Promise<StationType> => {
  return await service.update(id, payload)
}

export const deleteById = async (id: number): Promise<boolean> => {
  return await service.deleteById(id)
}
