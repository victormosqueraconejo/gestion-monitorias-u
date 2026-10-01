import Subject from '../models/subject.model'
import { createCrudController } from './crud.controller'

export const {
  list: listSubjects,
  getById: getSubjectById,
  create: createSubject,
  update: updateSubject,
  remove: deleteSubject,
} = createCrudController(Subject, 'materia')
