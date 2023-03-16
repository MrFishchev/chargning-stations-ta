import { Station } from '../models/Station'
import { NotFoundException } from '../../exceptions'
import { GetAllStationsFilter } from '../filters/stations'
import { Op } from 'sequelize'
import { Company } from '../models/Company'
import { StationType } from '../models/StationType'

export const getAll = async (
  filter?: GetAllStationsFilter
): Promise<Station[]> => {
  return Station.findAll({
    where: {
      ...(filter?.company && { company: { [Op.eq]: filter.company } }),
      ...(filter?.type && { type: { [Op.eq]: filter.type } })
    },
    include: [
      { model: Company, attributes: ['id', 'name'] },
      { model: StationType, attributes: ['id', 'name', 'maxPower'] }
    ]
  })
}

export const getById = async (id: number): Promise<Station> => {
  const station = await Station.findByPk(id, {
    include: [
      { model: Company, attributes: ['id', 'name'] },
      { model: StationType, attributes: ['id', 'name', 'maxPower'] }
    ]
  })
  if (!station) {
    throw new NotFoundException()
  }
  return station
}

export const create = async (payload: Station): Promise<Station> => {
  const station = await Station.create({ ...payload })
  return station
}

export const update = async (
  id: number,
  payload: Partial<Station>
): Promise<Station> => {
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
