import {
  Table,
  Model,
  DefaultScope,
  BelongsTo,
  Column,
  Unique
} from 'sequelize-typescript'
import { StationType } from './StationType'
import { Company } from './Company'

@DefaultScope(() => ({
  attributes: ['id', 'name']
}))
@Table
export class Station extends Model {
  @Unique
  @Column
  name!: string

  @BelongsTo(() => StationType, {
    foreignKey: {
      name: 'typeId',
      allowNull: true
    },
    as: 'type'
  })
  type?: StationType

  @BelongsTo(() => Company, {
    foreignKey: {
      name: 'companyId',
      allowNull: true
    },
    as: 'company'
  })
  company?: Company

  @Column
  maxPower!: number
}
