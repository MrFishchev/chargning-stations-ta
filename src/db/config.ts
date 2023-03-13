import * as dotenv from 'dotenv'
import { Sequelize } from 'sequelize'
dotenv.config()

const { DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_PORT } = process.env

const dbConnection = new Sequelize({
  database: DB_DATABASE,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  port: Number(DB_PORT ?? 5432),
  dialect: 'postgres'
})

export default dbConnection
