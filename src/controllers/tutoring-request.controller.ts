import TutoringRequest from '../models/tutoring-request.model'
import { createCrudController } from './crud.controller'

export const {
  list: listTutoringRequests,
  getById: getTutoringRequestById,
  create: createTutoringRequest,
  update: updateTutoringRequest,
  remove: deleteTutoringRequest,
} = createCrudController(TutoringRequest, 'solicitud de tutoria')
