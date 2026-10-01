import { model, Schema } from 'mongoose'

const AcademicReportSchema = new Schema(
  {
    tipo: { type: String, required: true },
    generado_por: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    filtros: { type: Schema.Types.Mixed, required: true },
    resultados: { type: [Schema.Types.Mixed], required: true },
    compartido_con: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    fecha_generacion: { type: Date, required: true },
  },
  { collection: 'reportes_academicos' },
)

export default model('AcademicReport', AcademicReportSchema)
