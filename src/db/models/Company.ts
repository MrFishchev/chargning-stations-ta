import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'

interface CompanyAttributes {
  id: number
  name: string
  parentCompany: number | undefined
}

export type CompanyInput = Optional<CompanyAttributes, 'id' | 'parentCompany'>
export type CompanyOutput = Required<CompanyAttributes>

class Company
  extends Model<CompanyAttributes, CompanyInput>
  implements CompanyAttributes
{
  public id!: number
  public name!: string
  public parentCompany: number | undefined
}

Company.init(
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
    parentCompany: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Companies',
        key: 'id'
      },
      allowNull: true
    }
  },
  {
    sequelize: sequelizeConnection
  }
)

Company.hasMany(Company)

export default Company
