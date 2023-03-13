import express, { Application, Request, Response } from 'express'
import router from './api/routes'
import dbInit from './db/init'

dbInit()

const port = process.env.PORT || 3000

export const get = () => {
  const app: Application = express()

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.get('/', async (request: Request, response: Response) => {
    return response
      .status(200)
      .send(
        `Welcome to the cookbook API! \n Endpoints are available at http://localhost:${port}/api/v1`
      )
  })

  app.use('/api/v1', router)

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
