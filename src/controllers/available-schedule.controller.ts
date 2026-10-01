import AvailableSchedule from '../models/available-schedule.model'
import { createCrudController } from './crud.controller'

export const {
  list: listAvailableSchedules,
  getById: getAvailableScheduleById,
  create: createAvailableSchedule,
  update: updateAvailableSchedule,
  remove: deleteAvailableSchedule,
} = createCrudController(AvailableSchedule, 'horario disponible')
