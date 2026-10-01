import Career from '../models/career.model'
import { createCrudController } from './crud.controller'

export const {
  list: listCareers,
  getById: getCareerById,
  create: createCareer,
  update: updateCareer,
  remove: deleteCareer,
} = createCrudController(Career, 'carrera')
