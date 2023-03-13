import { Router, Request, Response } from 'express'
import * as companyController from '../controllers/company'
import {
  CreateCompanyDto,
  FilterCompaniesDto,
  UpdateCompanyDto
} from '../dto/company.dto'

const companiesRouter = Router()

companiesRouter.get('/', async (request: Request, response: Response) => {
  const filter: FilterCompaniesDto = request.query
  const result = await companyController.getAll(filter)
  return response.status(200).send(result)
})

companiesRouter.get('/:id', async (request: Request, response: Response) => {
  const id = Number(request.params.id)
  const result = await companyController.getById(id)
  return response.status(200).send(result)
})

companiesRouter.post('/', async (request: Request, response: Response) => {
  const payload: CreateCompanyDto = request.body
  const result = await companyController.create(payload)
  return response.status(200).send(result)
})

companiesRouter.put('/:id', async (request: Request, response: Response) => {
  const id = Number(request.params.id)
  const payload: UpdateCompanyDto = request.body

  const result = await companyController.update(id, payload)
  return response.status(200).send(result)
})

companiesRouter.delete('/:id', async (request: Request, response: Response) => {
  const id = Number(request.params.id)
  const result = await companyController.deleteById(id)
  return response.status(200).send(result)
})

export default companiesRouter
