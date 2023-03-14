import { Router, Request, Response, NextFunction } from 'express'
import * as stationController from '../controllers/station'
import {
  CreateStationDto,
  FilterStationsDto,
  UpdateStationDto
} from '../dto/station.dto'

const stationsRouter = Router()

stationsRouter.get(
  '/',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const filter: FilterStationsDto = request.query
      const result = await stationController.getAll(filter)
      return response.status(200).send(result)
    } catch (error) {
      next(error)
    }
  }
)

stationsRouter.get(
  '/:id',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const id = Number(request.params.id)
      const result = await stationController.getById(id)
      return response.status(200).send(result)
    } catch (err) {
      next(err)
    }
  }
)

stationsRouter.post(
  '/',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const payload: CreateStationDto = request.body
      const result = await stationController.create(payload)
      return response.status(201).send(result)
    } catch (err) {
      next(err)
    }
  }
)

stationsRouter.put(
  '/:id',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const id = Number(request.params.id)
      const payload: UpdateStationDto = request.body

      const result = await stationController.update(id, payload)
      return response.status(200).send(result)
    } catch (err) {
      next(err)
    }
  }
)

stationsRouter.delete(
  '/:id',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const id = Number(request.params.id)
      const result = await stationController.deleteById(id)
      return response.status(200).send(result)
    } catch (err) {
      next(err)
    }
  }
)

export default stationsRouter
