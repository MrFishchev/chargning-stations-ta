import {
  Table,
  Model,
  DefaultScope,
  Column,
  BelongsTo,
  Unique,
  HasMany
} from 'sequelize-typescript'
import { Station } from './Station'

@DefaultScope(() => ({
  attributes: ['id', 'name']
}))
@Table
export class Company extends Model {
  @Unique
  @Column
  name!: string

  @BelongsTo(() => Company, {
    foreignKey: {
      name: 'parentCompanyId',
      allowNull: true
    },
    as: 'parentCompany'
  })
  parentCompany?: Company

  @HasMany(() => Station, { foreignKey: 'companyId' })
  stations?: Station[]
}
