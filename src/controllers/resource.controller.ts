import Resource from '../models/resource.model'
import { createCrudController } from './crud.controller'

export const {
  list: listResources,
  getById: getResourceById,
  create: createResource,
  update: updateResource,
  remove: deleteResource,
} = createCrudController(Resource, 'recurso')
