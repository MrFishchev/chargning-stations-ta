import * as service from '../../services/StationTypeService'
import {
  CreateStationTypeDto,
  UpdateStationTypeDto
} from '../../dto/stationType.dto'
import { StationType } from '../../interfaces'
import * as mapper from './mapper'

export const getAll = async (): Promise<StationType[]> => {
  return (await service.getAll()).map(mapper.toStationType)
}

export const getById = async (id: number): Promise<StationType> => {
  return mapper.toStationType(await service.getById(id))
}

export const create = async (
  payload: CreateStationTypeDto
): Promise<StationType> => {
  return mapper.toStationType(await service.create(payload))
}

export const update = async (
  id: number,
  payload: UpdateStationTypeDto
): Promise<StationType> => {
  return mapper.toStationType(await service.update(id, payload))
}

export const deleteById = async (id: number): Promise<boolean> => {
  return await service.deleteById(id)
}
