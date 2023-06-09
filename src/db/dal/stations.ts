import { NotFoundException } from '../../exceptions'
import { GetAllStationsFilter } from '../filters/stations'
import { Op } from 'sequelize'
import { Company, StationType, Station } from '../models'

export const getAll = async (
  filter?: GetAllStationsFilter
): Promise<Station[]> => {
  return Station.findAll({
    where: {
      ...(filter?.company && { companyId: { [Op.eq]: filter.company } }),
      ...(filter?.type && { typeId: { [Op.eq]: filter.type } }),
      ...(filter?.isCharging && { isCharging: { [Op.eq]: filter.isCharging } })
    },
    include: [Company, StationType]
  })
}

export const getById = async (id: number): Promise<Station> => {
  const station = await Station.findByPk(id, {
    include: [Company, StationType]
  })
  if (!station) {
    throw new NotFoundException()
  }
  return station
}

export const create = async (payload: Station): Promise<Station> => {
  payload.isCharging = false
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
