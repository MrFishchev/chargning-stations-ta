import { Router, Request, Response, NextFunction } from 'express'
import * as companyController from '../controllers/company'
import {
  CreateCompanyDto,
  FilterCompaniesDto,
  UpdateCompanyDto
} from '../dto/company.dto'

const companiesRouter = Router()

companiesRouter.get(
  '/',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const filter: FilterCompaniesDto = request.query
      const result = await companyController.getAll(filter)
      return response.status(200).send(result)
    } catch (error) {
      next(error)
    }
  }
)

companiesRouter.get(
  '/:id',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const id = Number(request.params.id)
      const result = await companyController.getById(id)
      return response.status(200).send(result)
    } catch (err) {
      next(err)
    }
  }
)

companiesRouter.post(
  '/',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const payload: CreateCompanyDto = request.body
      const result = await companyController.create(payload)
      return response.status(200).send(result)
    } catch (err) {
      next(err)
    }
  }
)

companiesRouter.put(
  '/:id',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const id = Number(request.params.id)
      const payload: UpdateCompanyDto = request.body

      const result = await companyController.update(id, payload)
      return response.status(200).send(result)
    } catch (err) {
      next(err)
    }
  }
)

companiesRouter.delete(
  '/:id',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const id = Number(request.params.id)
      const result = await companyController.deleteById(id)
      return response.status(200).send(result)
    } catch (err) {
      next(err)
    }
  }
)

export default companiesRouter
