import * as service from '../../services/StationService'
import {
  CreateStationDto,
  FilterStationsDto,
  UpdateStationDto
} from '../../dto/station.dto'
import { Station } from '../../interfaces'
import * as mapper from './mapper'

export const getAll = async (
  filter?: FilterStationsDto
): Promise<Station[]> => {
  return (await service.getAll(filter)).map(mapper.toStation)
}

export const getById = async (id: number): Promise<Station> => {
  return mapper.toStation(await service.getById(id))
}

export const create = async (payload: CreateStationDto): Promise<Station> => {
  return mapper.toStation(await service.create(payload))
}

export const update = async (
  id: number,
  payload: UpdateStationDto
): Promise<Station> => {
  return mapper.toStation(await service.update(id, payload))
}

export const deleteById = async (id: number): Promise<boolean> => {
  return await service.deleteById(id)
}
