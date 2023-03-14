import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'

interface StationTypeAttributes {
  id: number
  name: string
  maxPower: number
}

export type StationTypeInput = Optional<StationTypeAttributes, 'id'>
export type StationTypeOutput = Required<StationTypeAttributes>

class StationType
  extends Model<StationTypeAttributes, StationTypeInput>
  implements StationTypeAttributes
{
  public id!: number
  public name!: string
  public maxPower!: number
}

StationType.init(
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
    maxPower: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize: sequelizeConnection,
    modelName: 'StationType',
    tableName: 'StationTypes'
  }
)

export default StationType
