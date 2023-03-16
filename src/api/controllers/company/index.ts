import * as service from '../../services/CompanyService'
import { GetAllCompaniesFilter } from '../../../db/filters/companies'
import { Company } from '../../../db/models/Company'

export const getAll = async (
  filter?: GetAllCompaniesFilter
): Promise<Company[]> => {
  return await service.getAll(filter)
}

export const getById = async (id: number): Promise<Company> => {
  return await service.getById(id)
}

export const create = async (payload: Company): Promise<Company> => {
  return await service.create(payload)
}

export const update = async (
  id: number,
  payload: Company
): Promise<Company> => {
  return await service.update(id, payload)
}

export const deleteById = async (id: number): Promise<boolean> => {
  return await service.deleteById(id)
}
