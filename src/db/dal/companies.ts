import Company from '../models/Company'
import { CompanyInput, CompanyOutput } from '../models/Company'
import { GetAllCompaniesFilter } from './filters/companies'
import { NotFoundException } from '../../exceptions'
import { Op } from 'sequelize'

export const getAll = async (
  filter?: GetAllCompaniesFilter
): Promise<CompanyOutput[]> => {
  return Company.findAll({
    where: {
      ...(filter?.parentCompany && {
        parentCompany: { [Op.eq]: filter.parentCompany }
      })
    }
  })
}

export const getById = async (id: number): Promise<CompanyOutput> => {
  const company = await Company.findByPk(id)
  if (!company) {
    throw new NotFoundException()
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
    throw new NotFoundException()
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
