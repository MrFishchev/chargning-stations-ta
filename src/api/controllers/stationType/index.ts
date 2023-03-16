import * as service from '../../services/StationTypeService'
import { StationType } from '../../../db/models/StationType'

/**
 * Get all station types
 * @returns List of station types
 */
export const getAll = async (): Promise<StationType[]> => {
  return await service.getAll()
}

/**
 * Get station type by id
 * @param id Id of station type
 * @returns Station type
 * @throws NotFound - if station doesn't exist
 */
export const getById = async (id: number): Promise<StationType> => {
  return await service.getById(id)
}

/**
 * Create station type
 * @param payload
 * @returns Created station type
 */
export const create = async (payload: StationType): Promise<StationType> => {
  return await service.create(payload)
}

/**
 * Update station type
 * @param id Id of station type to be updated
 * @param payload Data of station type to be updated
 * @returns Updated station type
 */
export const update = async (
  id: number,
  payload: StationType
): Promise<StationType> => {
  return await service.update(id, payload)
}

/**
 * Delete station type, cannot be deleted if used by any station
 * @param id Id of station type
 * @returns true - if deleted, otherwise - false
 */
export const deleteById = async (id: number): Promise<boolean> => {
  return await service.deleteById(id)
}
