import { Router, Request, Response, NextFunction } from 'express'
import * as stationTypeController from '../controllers/stationType'
import {
  CreateStationTypeDto,
  UpdateStationTypeDto
} from '../dto/stationType.dto'

const stationTypesRouter = Router()

stationTypesRouter.get(
  '/',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const result = await stationTypeController.getAll()
      return response.status(200).send(result)
    } catch (error) {
      next(error)
    }
  }
)

stationTypesRouter.get(
  '/:id',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const id = Number(request.params.id)
      const result = await stationTypeController.getById(id)
      return response.status(200).send(result)
    } catch (err) {
      next(err)
    }
  }
)

stationTypesRouter.post(
  '/',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const payload: CreateStationTypeDto = request.body
      const result = await stationTypeController.create(payload)
      return response.status(201).send(result)
    } catch (err) {
      next(err)
    }
  }
)

stationTypesRouter.put(
  '/:id',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const id = Number(request.params.id)
      const payload: UpdateStationTypeDto = request.body

      const result = await stationTypeController.update(id, payload)
      return response.status(200).send(result)
    } catch (err) {
      next(err)
    }
  }
)

stationTypesRouter.delete(
  '/:id',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const id = Number(request.params.id)
      const result = await stationTypeController.deleteById(id)
      return response.status(200).send(result)
    } catch (err) {
      next(err)
    }
  }
)

export default stationTypesRouter
