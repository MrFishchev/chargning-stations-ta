import * as companyDal from '../../db/dal/companies'
import { GetAllCompaniesFilter } from '../../db/dal/filters/companies'
import { Company } from '../../db/models/Company'

export const getAll = (filter?: GetAllCompaniesFilter): Promise<Company[]> => {
  return companyDal.getAll(filter)
}

export const getById = (id: number): Promise<Company> => {
  return companyDal.getById(id)
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
