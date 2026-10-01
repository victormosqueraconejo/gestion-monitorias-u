import { model, Schema } from 'mongoose'

const AttendanceSchema = new Schema(
  {
    presente: { type: Boolean, default: null },
    hora_registro: { type: Date, default: null },
  },
  { _id: false },
)

const StudentAttendanceSchema = new Schema(
  {
    estudiante_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    carrera_id: { type: Schema.Types.ObjectId, ref: 'Career', required: true },
    semestre: { type: Number, required: true, min: 1 },
    fecha_inscripcion: { type: Date, required: true },
    asistencia: { type: AttendanceSchema, required: true },
  },
  { _id: false },
)

const TutoringSchema = new Schema(
  {
    solicitud_origen_id: {
      type: Schema.Types.ObjectId,
      ref: 'TutoringRequest',
      default: null,
    },
    profesor_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    materia_id: { type: Schema.Types.ObjectId, ref: 'Subject', required: true },
    tema_id: { type: Schema.Types.ObjectId, ref: 'Topic', required: true },
    fecha: { type: Date, required: true },
    hora_inicio: { type: String, required: true },
    hora_fin: { type: String, required: true },
    modalidad: { type: String, required: true },
    enlace_reunion: { type: String, default: null },
    enlace_grabacion: { type: String, default: null },
    tipo: { type: String, required: true },
    capacidad_maxima: { type: Number, required: true, min: 1 },
    publicada: { type: Boolean, required: true },
    estado: { type: String, required: true },
    asistencia_profesor: { type: AttendanceSchema, required: true },
    estudiantes: { type: [StudentAttendanceSchema], required: true },
    fecha_creacion: { type: Date, required: true },
  },
  { collection: 'tutorias' },
)

export default model('Tutoring', TutoringSchema)
