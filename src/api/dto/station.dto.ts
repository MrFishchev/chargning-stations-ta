export type CreateStationDto = {
  name: string
  company: number
  type: number
}

export type UpdateStationDto = CreateStationDto

export type FilterStationsDto = {
  company?: number
  type?: number
}
