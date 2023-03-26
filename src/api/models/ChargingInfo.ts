export interface ChargingInfo {
  steps: ChargingStepInfo[]
}

export interface ChargingStepInfo {
  step: string
  timestamp: number
  companies: CompanyInfo[]
  totalChargingStations: number[]
  totalChargingPower: number
}

export interface CompanyInfo {
  id: number
  chargingStations: number[]
  chargingPower: number
}
