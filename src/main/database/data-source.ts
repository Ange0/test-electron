import { DataSource } from 'typeorm'
import Photo from '../models/photo'
import { is } from '@electron-toolkit/utils'
import dbPath from '../../../resources/test.db?asset'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: is.dev && process.env['ELECTRON_RENDERER_URL'] ? 'resources/test.db' : dbPath,
  synchronize: true,
  logging: true,
  entities: [Photo],
  subscribers: [],
  migrations: []
})
