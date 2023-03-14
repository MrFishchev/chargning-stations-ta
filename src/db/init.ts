import Company from './models/Company'
import StationType, { StationTypeInput } from './models/StationType'
import Station, { StationInput } from './models/Station'
import { CompanyInput } from './models/Company'

const isDev = process.env.NODE_ENV === 'development'

const dbInit = async () => {
  await StationType.sync({ alter: isDev })
  await Company.sync({ alter: isDev })
  await Station.sync({ alter: isDev })

  isDev ? DbSeed() : Promise.resolve()
}

async function DbSeed(): Promise<void> {
  const companies: CompanyInput[] = [
    { id: 1, name: 'Company 1' },
    { id: 2, name: 'Company 2', parentCompany: 1 },
    { id: 3, name: 'Company 3', parentCompany: 1 }
  ]

  const stationTypes: StationTypeInput[] = [
    { id: 1, name: 'Station Type 1', maxPower: 10 },
    { id: 2, name: 'Station Type 2', maxPower: 20 }
  ]

  const stations: StationInput[] = [
    { id: 1, name: 'Station 1', type: 1, company: 1 },
    { id: 2, name: 'Station 2', type: 2, company: 1 },

    { id: 3, name: 'Station 3', type: 1, company: 2 },
    { id: 4, name: 'Station 4', type: 2, company: 2 },

    { id: 5, name: 'Station 5', type: 1, company: 3 },
    { id: 6, name: 'Station 6', type: 2, company: 3 }
  ]

  await Promise.all([
    ...companies.map((x) => Company.upsert(x)),
    ...stationTypes.map((x) => StationType.upsert(x)),
    ...stations.map((x) => Station.upsert(x))
  ])
}

export default dbInit
