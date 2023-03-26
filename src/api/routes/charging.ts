import { Router, Request, Response, NextFunction } from 'express'
import * as chargingController from '../controllers/charging'

const stationsRouter = Router()

stationsRouter.post(
  `/execute`,
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const body = request.body.toString()
      const result = await chargingController.execute(body.split(/\r\n|\r|\n/))
      return response.status(200).send(result)
    } catch (err) {
      next(err)
    }
  }
)

export default stationsRouter
