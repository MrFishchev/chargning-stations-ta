import * as service from '../../services/StationService'
import { GetAllStationsFilter } from '../../../db/filters/stations'
import { Station } from '../../../db/models/Station'

/**
 * Get all stations
 * @param filter Filters stations by type and company (ex. /?type=:id&company=:id)
 * @returns List of stations with a owner company
 */
export const getAll = async (
  filter?: GetAllStationsFilter
): Promise<Station[]> => {
  return await service.getAll(filter)
}

/**
 * Get station by id
 * @param id Id of a station
 * @returns Station
 * @throws NotFound - if station doesn't exist
 */
export const getById = async (id: number): Promise<Station> => {
  return await service.getById(id)
}

/**
 * Create station
 * @param payload
 * @returns Created Station
 */
export const create = async (payload: Station): Promise<Station> => {
  return await service.create(payload)
}

/**
 * Update station
 * @param id Id of station to be updated
 * @param payload Data of station to be updated
 * @returns Updated Station
 * @throws NotFound - if station doesn't exist
 */
export const update = async (
  id: number,
  payload: Station
): Promise<Station> => {
  return await service.update(id, payload)
}

/**
 * Delete station
 * @param id Id of station to be updated
 * @returns true - if deleted, otherwise - false
 */
export const deleteById = async (id: number): Promise<boolean> => {
  return await service.deleteById(id)
}
