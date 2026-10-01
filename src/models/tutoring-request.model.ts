import { model, Schema } from 'mongoose'

const TutoringRequestSchema = new Schema(
  {
    estudiante_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    profesor_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    materia_id: { type: Schema.Types.ObjectId, ref: 'Subject', required: true },
    tema_id: { type: Schema.Types.ObjectId, ref: 'Topic', required: true },
    horario_id: {
      type: Schema.Types.ObjectId,
      ref: 'AvailableSchedule',
      required: true,
    },
    carrera_id: { type: Schema.Types.ObjectId, ref: 'Career', required: true },
    semestre: { type: Number, required: true, min: 1 },
    mensaje: { type: String, required: true },
    estado: { type: String, required: true },
    fecha_solicitud: { type: Date, required: true },
    fecha_respuesta: { type: Date, default: null },
    tutoria_id: { type: Schema.Types.ObjectId, ref: 'Tutoring', default: null },
  },
  { collection: 'solicitudes_tutoria' },
)

export default model('TutoringRequest', TutoringRequestSchema)
