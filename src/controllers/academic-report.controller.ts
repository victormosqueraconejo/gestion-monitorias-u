import AcademicReport from '../models/academic-report.model'
import { createCrudController } from './crud.controller'

export const {
  list: listAcademicReports,
  getById: getAcademicReportById,
  create: createAcademicReport,
  update: updateAcademicReport,
  remove: deleteAcademicReport,
} = createCrudController(AcademicReport, 'reporte académico')
