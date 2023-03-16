import * as service from '../../services/CompanyService'
import { GetAllCompaniesFilter } from '../../../db/filters/companies'
import { Company, Station } from '../../../db/models'

/**
 * Get all companies
 * @param filter Filters companies by parent company (ex. /?parentCompany=:id)
 * @returns List of companies
 */
export const getAll = async (
  filter?: GetAllCompaniesFilter
): Promise<Company[]> => {
  return await service.getAll(filter)
}

/**
 * Get one company by its id
 * @param id Id of a company
 * @returns Company
 * @throws NotFound - if company doesn't exist
 */
export const getById = async (id: number): Promise<Company> => {
  return await service.getById(id)
}

/**
 * Get all stations owned by a company
 * @param id Id of a company
 * @returns List of stations with all the data (e.g. maxPower)
 * @throws NotFound - if company doesn't exist
 */
export const getCompanyStations = async (id: number): Promise<Station[]> => {
  return await service.getCompanyStations(id)
}

/**
 * Create a company
 * @param payload
 * @returns Created company
 */
export const create = async (payload: Company): Promise<Company> => {
  return await service.create(payload)
}

/**
 * Update a company
 * @param id Id of a company to be updated
 * @param payload Company data to be updated
 * @returns Updated company
 * @throws NotFound - if company doesn't exist
 */
export const update = async (
  id: number,
  payload: Company
): Promise<Company> => {
  return await service.update(id, payload)
}

/**
 * Delete a company, cannot be deleted if used by any company or station
 * @param id Id of a company
 * @returns true - if deleted, otherwise - false
 */
export const deleteById = async (id: number): Promise<boolean> => {
  return await service.deleteById(id)
}
