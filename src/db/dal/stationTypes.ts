import { StationType } from '../models/StationType'
import { NotFoundException } from '../../exceptions'

export const getAll = async (): Promise<StationType[]> => {
  return StationType.findAll()
}

export const getById = async (id: number): Promise<StationType> => {
  const stationType = await StationType.findByPk(id)
  if (!stationType) {
    throw new NotFoundException()
  }
  return stationType
}

export const create = async (payload: StationType): Promise<StationType> => {
  const stationType = await StationType.create({ ...payload })
  return stationType
}

export const update = async (
  id: number,
  payload: Partial<StationType>
): Promise<StationType> => {
  const stationType = await StationType.findByPk(id)
  if (!stationType) {
    throw new NotFoundException()
  }

  const updatedStationType = await (stationType as StationType).update(payload)
  return updatedStationType
}

export const deleteById = async (id: number): Promise<boolean> => {
  const deletedCompaniesCount = await StationType.destroy({
    where: { id }
  })
  return !!deletedCompaniesCount
}
