import School from '../models/school.model'
import { createCrudController } from './crud.controller'

export const {
  list: listSchools,
  getById: getSchoolById,
  create: createSchool,
  update: updateSchool,
  remove: deleteSchool,
} = createCrudController(School, 'escuela')
