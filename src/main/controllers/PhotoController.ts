import { AppDataSource } from '../database/data-source'
import Photo from '../models/photo'

export default class PhotoController {
  static getAll(): Promise<Photo[]> {
    return AppDataSource.getRepository(Photo).find()
  }
}
