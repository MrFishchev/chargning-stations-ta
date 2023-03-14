import Station from '../models/Station'
import { StationInput, StationOutput } from '../models/Station'
import { NotFoundException } from '../../exceptions'
import { GetAllStationsFilter } from './filters/stations'
import { Op } from 'sequelize'

export const getAll = async (
  filter?: GetAllStationsFilter
): Promise<StationOutput[]> => {
  return Station.findAll({
    where: {
      ...(filter?.company && { company: { [Op.eq]: filter.company } }),
      ...(filter?.type && { type: { [Op.eq]: filter.type } })
    }
  })
}

export const getById = async (id: number): Promise<StationOutput> => {
  const station = await Station.findByPk(id)
  if (!station) {
    throw new NotFoundException()
  }
  return station
}

export const create = async (payload: StationInput): Promise<StationOutput> => {
  const station = await Station.create(payload)
  return station
}

export const update = async (
  id: number,
  payload: Partial<StationInput>
): Promise<StationOutput> => {
  const station = await Station.findByPk(id)
  if (!station) {
    throw new NotFoundException()
  }

  const updatedStation = await (station as Station).update(payload)
  return updatedStation
}

export const deleteById = async (id: number): Promise<boolean> => {
  const deletedCompaniesCount = await Station.destroy({
    where: { id }
  })
  return !!deletedCompaniesCount
}
