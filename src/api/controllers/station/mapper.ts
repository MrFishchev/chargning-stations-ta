import { Station } from '../../interfaces'
import { StationOutput } from '../../../db/models/Station'

export const toStation = (station: StationOutput): Station => {
  return {
    id: station.id,
    name: station.name,
    type: station.type,
    company: station.company
  }
}
