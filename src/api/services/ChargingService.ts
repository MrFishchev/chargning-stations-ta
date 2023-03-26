import { Station, Company } from '../../db/models'
import { DispatchStationCharging } from '../models'
import { ChargingStepInfo, CompanyInfo } from '../models/ChargingInfo'
import * as companyService from './CompanyService'
import * as stationService from './StationService'

export const startStation = async (
  dispatchStateReq: DispatchStationCharging
): Promise<ChargingStepInfo> => {
  const stationId = dispatchStateReq.id!
  const startChargingTask = stationService.startCharging(stationId)

  const station = await stationService.getById(stationId)
  const companies = await companyService.getAllOwners(station.company?.id)
  const stationOwnerInfo = await getStationOwnerInfo(station)

  const companiesInfo = await getParentCompaniesInfo(
    companies,
    stationOwnerInfo,
    true
  )

  const chargingStepInfo: ChargingStepInfo = {
    step: `Start station ${stationId}`,
    timestamp: await startChargingTask,
    companies: companiesInfo.sort((x, y) => x.id - y.id),
    totalChargingStations: [
      ...new Set(companiesInfo.map((x) => x.chargingStations).flat(1))
    ],
    totalChargingPower:
      companiesInfo
        .map((x) => x.chargingPower)
        .reduce((sum, val) => (sum += val), 0) -
      stationOwnerInfo.chargingPower * (companiesInfo.length - 1)
  }

  return chargingStepInfo
}

export const stopStation = async (
  dispatchStateReq: DispatchStationCharging
): Promise<ChargingStepInfo> => {
  const stationId = dispatchStateReq.id!
  const startChargingTask = stationService.stopCharging(stationId)

  const station = await stationService.getById(stationId)
  const companies = await companyService.getAllOwners(station.company?.id)
  const stationOwnerInfo = await getStationOwnerInfo(station)

  const companiesInfo = await getParentCompaniesInfo(
    companies,
    stationOwnerInfo,
    false
  )

  const chargingStepInfo: ChargingStepInfo = {
    step: `Stop station ${stationId}`,
    timestamp: await startChargingTask,
    companies: companiesInfo.sort((x, y) => x.id - y.id),
    totalChargingStations: [
      ...new Set(companiesInfo.map((x) => x.chargingStations).flat(1))
    ],
    totalChargingPower:
      companiesInfo
        .map((x) => x.chargingPower)
        .reduce((sum, val) => (sum += val), 0) -
      stationOwnerInfo.chargingPower * (companiesInfo.length - 1)
  }

  return chargingStepInfo
}

async function getStationOwnerInfo(station: Station): Promise<CompanyInfo> {
  const stationOwner = station.company
  const stationOwnerStations = await stationService.getAll({
    company: station.company?.id,
    isCharging: true
  })

  const stationOwnerInfo: CompanyInfo = {
    id: stationOwner?.id,
    chargingStations: stationOwnerStations.map((s) => s.id),
    chargingPower: stationOwnerStations
      .map((s) => s.type?.maxPower ?? 0)
      .reduce((sum, val) => (sum += val), 0)
  }

  return stationOwnerInfo
}

async function getParentCompaniesInfo(
  companies: Company[],
  stationOwnerInfo: CompanyInfo,
  reportChildData: boolean
): Promise<CompanyInfo[]> {
  const companiesInfo: CompanyInfo[] = [stationOwnerInfo]
  for (const company of companies) {
    const companyStations = await stationService.getAll({
      company: company.id,
      isCharging: true
    })

    const companyInfo: CompanyInfo = {
      id: company.id,
      chargingStations: companyStations.map((s) => s.id),
      chargingPower: companyStations
        .map((s) => s.type?.maxPower ?? 0)
        .reduce((sum, val) => (sum += val), 0)
    }

    // Report data from first child company
    if (reportChildData) {
      companyInfo.chargingPower += stationOwnerInfo.chargingPower
      companyInfo.chargingStations.push(...stationOwnerInfo.chargingStations)
    }

    companiesInfo.push(companyInfo)
  }
  return companiesInfo
}
