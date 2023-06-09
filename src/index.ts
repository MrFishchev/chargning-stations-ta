import express, { Application, NextFunction, Request, Response } from 'express'
import router from './api/routes'
import dbInit from './db/init'
import { NotFoundException } from './exceptions'
import bodyParser from 'body-parser'

dbInit()

const port = process.env.PORT || 3000

export const get = () => {
  const app: Application = express()

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(bodyParser.text())

  app.use('/api/v1', router)

  // Not Found
  app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof NotFoundException) {
      return res.status(404).send('Not Found')
    }
    next(error)
  })

  // Unexpected errors
  app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(`Request is failed: ${error.message}`)
    res.status(500).send(`Unexpected error: ${error.message}`)
  })
  return app
}

export const start = () => {
  const app = get()
  try {
    app.listen(port, () => {
      console.log(`Server is running on ${port} port`)
    })
  } catch (err) {
    console.log(`Unexpected error: ${err}`)
  }
}

start()
