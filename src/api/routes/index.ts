import { Router } from 'express'
import companiesRouter from './companies'

const router = Router()

router.use('/companies', companiesRouter)

export default router
