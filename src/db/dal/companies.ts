import { GetAllCompaniesFilter } from '../filters/companies'
import { NotFoundException } from '../../exceptions'
import { Op } from 'sequelize'
import { Station, StationType, Company } from '../models'

export const getAll = async (
  filter?: GetAllCompaniesFilter
): Promise<Company[]> => {
  return Company.findAll({
    where: {
      ...(filter?.parentCompany && {
        parentCompanyId: { [Op.eq]: filter.parentCompany }
      })
    },
    include: [Company]
  })
}

export const getById = async (id: number): Promise<Company> => {
  const company = await Company.findByPk(id, {
    include: [Company]
  })
  if (!company) {
    throw new NotFoundException()
  }
  return company
}

export const getCompanyStations = async (id: number): Promise<Station[]> => {
  const companyData = await Company.findByPk(id, {
    include: [
      {
        model: Station,
        include: [{ model: StationType, attributes: ['maxPower'] }]
      }
    ]
  })
  if (!companyData) {
    throw new NotFoundException()
  }

  return companyData.stations ?? []
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
