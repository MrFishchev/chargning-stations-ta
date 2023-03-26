import { Router } from 'express'
import companiesRouter from './companies'
import stationsRouter from './stations'
import stationTypesRouter from './stationTypes'
import charging from './charging'

const router = Router()

router.use('/companies', companiesRouter)
router.use('/stations', stationsRouter)
router.use('/station-types', stationTypesRouter)
router.use('/charging', charging)

export default router
