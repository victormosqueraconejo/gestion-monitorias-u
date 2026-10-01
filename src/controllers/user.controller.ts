import User from '../models/user.model'
import { createCrudController } from './crud.controller'

export const {
  list: listUsers,
  getById: getUserById,
  create: createUser,
  update: updateUser,
  remove: deleteUser,
} = createCrudController(User, 'usuario')
