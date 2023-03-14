import * as companyDal from '../../db/dal/companies'
import { CompanyInput, CompanyOutput } from '../../db/models/Company'
import { GetAllCompaniesFilter } from '../../db/dal/filters/companies'

export const getAll = (
  filter?: GetAllCompaniesFilter
): Promise<CompanyOutput[]> => {
  return companyDal.getAll(filter)
}

export const getById = (id: number): Promise<CompanyOutput> => {
  return companyDal.getById(id)
}

export const create = (payload: CompanyInput): Promise<CompanyOutput> => {
  return companyDal.create(payload)
}

export const update = (
  id: number,
  payload: Partial<CompanyInput>
): Promise<CompanyOutput> => {
  return companyDal.update(id, payload)
}

export const deleteById = (id: number): Promise<boolean> => {
  return companyDal.deleteById(id)
}
