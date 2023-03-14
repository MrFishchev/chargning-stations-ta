import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'
import Company from './Company'
import StationType from './StationType'

interface StationAttributes {
  id: number
  name: string
  type: number
  company: number
}

export type StationInput = Optional<StationAttributes, 'id'>
export type StationOutput = Required<StationAttributes>

class Station
  extends Model<StationAttributes, StationInput>
  implements StationAttributes
{
  public id!: number
  public name!: string
  public type!: number
  public company!: number
}

Station.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER,
      references: {
        model: StationType,
        key: 'id'
      }
    },
    company: {
      type: DataTypes.INTEGER,
      references: {
        model: Company,
        key: 'id'
      },
      allowNull: false
    }
  },
  {
    sequelize: sequelizeConnection,
    modelName: 'Station',
    tableName: 'Stations'
  }
)

// Station.hasOne(Company)
// Station.hasOne(StationType)

export default Station
