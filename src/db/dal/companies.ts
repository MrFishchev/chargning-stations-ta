import { GetAllCompaniesFilter } from '../filters/companies'
import { NotFoundException } from '../../exceptions'
import { Company } from '../models/Company'
import { Op } from 'sequelize'

export const getAll = async (
  filter?: GetAllCompaniesFilter
): Promise<Company[]> => {
  return Company.findAll({
    where: {
      ...(filter?.parentCompany && {
        parentCompanyId: { [Op.eq]: filter.parentCompany }
      })
    },
    include: [{ model: Company, attributes: ['id', 'name'] }]
  })
}

export const getById = async (id: number): Promise<Company> => {
  const company = await Company.findByPk(id, {
    include: [{ model: Company, attributes: ['id', 'name'] }]
  })
  if (!company) {
    throw new NotFoundException()
  }
  return company
}

export const create = async (payload: Company): Promise<Company> => {
  const company = Company.create({ ...payload })
  return company
}

export const update = async (
  id: number,
  payload: Partial<Company>
): Promise<Company> => {
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
