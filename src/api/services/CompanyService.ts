import * as companyDal from '../../db/dal/companies'
import { GetAllCompaniesFilter } from '../../db/filters/companies'
import { Company, Station } from '../../db/models'

export const getAll = (filter?: GetAllCompaniesFilter): Promise<Company[]> => {
  return companyDal.getAll(filter)
}

export const getById = (id: number): Promise<Company> => {
  return companyDal.getById(id)
}

export const getCompanyStations = (id: number): Promise<Station[]> => {
  return companyDal.getCompanyStations(id)
}

export const getAllOwners = (id: number): Promise<Company[]> => {
  return companyDal.getAllOwners(id)
}

export const create = (payload: Company): Promise<Company> => {
  return companyDal.create(payload)
}

export const update = (
  id: number,
  payload: Partial<Company>
): Promise<Company> => {
  return companyDal.update(id, payload)
}

export const deleteById = (id: number): Promise<boolean> => {
  return companyDal.deleteById(id)
}
