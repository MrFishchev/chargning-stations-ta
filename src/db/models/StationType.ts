import {
  Table,
  Model,
  DefaultScope,
  Column,
  Unique
} from 'sequelize-typescript'

@DefaultScope(() => ({
  attributes: ['id', 'name', 'maxPower']
}))
@Table
export class StationType extends Model {
  @Unique
  @Column
  name!: string

  @Column
  maxPower!: number
}
