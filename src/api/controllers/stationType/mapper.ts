import { StationType } from '../../interfaces'
import { StationTypeOutput } from '../../../db/models/StationType'

export const toStationType = (station: StationTypeOutput): StationType => {
  return {
    id: station.id,
    name: station.name,
    maxPower: station.maxPower
  }
}
