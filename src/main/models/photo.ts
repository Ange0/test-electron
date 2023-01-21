import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export default class Photo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column('varchar', { length: 100 })
  name!: string

  @Column('text')
  description!: string

  @Column('varchar')
  filename!: string

  @Column('double')
  views!: number

  @Column('boolean')
  isPublished!: boolean
}
