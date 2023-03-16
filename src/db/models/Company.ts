import {
  Table,
  Model,
  DefaultScope,
  Column,
  BelongsTo,
  Unique
} from 'sequelize-typescript'

@DefaultScope(() => ({
  attributes: ['id', 'name']
}))
@Table
export class Company extends Model<Company> {
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
}
