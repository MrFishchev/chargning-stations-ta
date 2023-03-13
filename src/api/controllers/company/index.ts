import * as service from '../../services/CompanyService'
import {
  CreateCompanyDto,
  FilterCompaniesDto,
  UpdateCompanyDto
} from '../../dto/company.dto'
import { Company } from '../../interfaces'
import * as mapper from './mapper'

export const getAll = async (
  filter?: FilterCompaniesDto
): Promise<Company[]> => {
  return (await service.getAll(filter)).map(mapper.toCompany)
}

export const getById = async (id: number): Promise<Company> => {
  return mapper.toCompany(await service.getById(id))
}

export const create = async (payload: CreateCompanyDto): Promise<Company> => {
  return mapper.toCompany(await service.create(payload))
}

export const update = async (
  id: number,
  payload: UpdateCompanyDto
): Promise<Company> => {
  return mapper.toCompany(await service.update(id, payload))
}

export const deleteById = async (id: number): Promise<boolean> => {
  return await service.deleteById(id)
}
