import dbConnection from './config'
import { Company } from './models/Company'
import { Station } from './models/Station'
import { StationType } from './models/StationType'

const isDev = process.env.NODE_ENV === 'development'

const dbInit = async () => {
  await dbConnection.sync({ alter: isDev })
  if (isDev) {
    SeedData()
  }
}

async function SeedData(): Promise<void> {
  const companies = Company.bulkCreate(
    [
      { name: 'Company 1' },
      { name: 'Company 2', parentCompanyId: 1 },
      { name: 'Company 3', parentCompanyId: 1 }
    ],
    { updateOnDuplicate: ['name', 'parentCompanyId'] }
  )
  const stationTypes = StationType.bulkCreate(
    [{ name: 'Station Type 1', maxPower: 10 }],
    { updateOnDuplicate: ['name', 'maxPower'] }
  )
  await Promise.all([companies, stationTypes])

  await Station.bulkCreate(
    [
      { name: 'Station 1', companyId: 3, typeId: 1 },
      { name: 'Station 2', companyId: 2, typeId: 1 },
      { name: 'Station 3', companyId: 2, typeId: 1 },
      { name: 'Station 4', companyId: 3, typeId: 1 },
      { name: 'Station 5', companyId: 1, typeId: 1 }
    ],
    { updateOnDuplicate: ['name', 'companyId', 'typeId'] }
  )
}

export default dbInit
