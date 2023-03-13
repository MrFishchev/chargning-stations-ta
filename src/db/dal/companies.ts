import Company from '../models/Company'
import { CompanyInput, CompanyOutput } from '../models/Company'
import { GetAllByParentFilter } from './filters/companies'

export const getAll = async (
  filter?: GetAllByParentFilter
): Promise<CompanyOutput[]> => {
  if (filter) {
    return Company.findAll({
      where: {
        parentCompany: filter?.parentCompany
      }
    })
  }

  return Company.findAll()
}

export const getById = async (id: number): Promise<CompanyOutput> => {
  const company = await Company.findByPk(id)
  if (!company) {
    throw new Error('Not Found')
  }
  return company
}

export const create = async (payload: CompanyInput): Promise<CompanyOutput> => {
  const company = await Company.create(payload)
  return company
}

export const update = async (
  id: number,
  payload: Partial<CompanyInput>
): Promise<CompanyOutput> => {
  const company = await Company.findByPk(id)
  if (!company) {
    throw new Error('Not Found')
  }

  const updatedCompany = await (company as Company).update(payload)
  return updatedCompany
}

export const deleteById = async (id: number): Promise<boolean> => {
  const deletedCompaniesCount = await Company.destroy({
    where: { id }
  })
  return !!deletedCompaniesCount
}
