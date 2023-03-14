import { Router } from 'express'
import companiesRouter from './companies'
import stationsRouter from './stations'
import stationTypesRouter from './stationTypes'

const router = Router()

router.use('/companies', companiesRouter)
router.use('/stations', stationsRouter)
router.use('/stationtypes', stationTypesRouter)

export default router
