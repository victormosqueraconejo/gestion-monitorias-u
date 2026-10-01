import Tutoring from '../models/tutoring.model'
import { createCrudController } from './crud.controller'

export const {
  list: listTutorings,
  getById: getTutoringById,
  create: createTutoring,
  update: updateTutoring,
  remove: deleteTutoring,
} = createCrudController(Tutoring, 'tutoría')
