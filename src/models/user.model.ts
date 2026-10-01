import { model, Schema } from 'mongoose'

const StudentProfileSchema = new Schema(
  {
    carrera_id: { type: Schema.Types.ObjectId, ref: 'Career' },
    semestre_actual: { type: Number, min: 1 },
    materias_interes: [{ type: Schema.Types.ObjectId, ref: 'Subject' }],
  },
  { _id: false },
)

const TeacherProfileSchema = new Schema(
  {
    materias: [{ type: Schema.Types.ObjectId, ref: 'Subject' }],
  },
  { _id: false },
)

const AdministratorProfileSchema = new Schema(
  {
    nivel_acceso: { type: String },
  },
  { _id: false },
)

const AcademicAdministratorProfileSchema = new Schema(
  {
    escuelas_a_cargo: [{ type: Schema.Types.ObjectId, ref: 'School' }],
  },
  { _id: false },
)

const UserSchema = new Schema(
  {
    nombre: { type: String, required: true },
    correo: { type: String, required: true },
    contrasena_hash: { type: String, required: true },
    rol: { type: String, required: true },
    escuela_id: { type: Schema.Types.ObjectId, ref: 'School', default: null },
    estado: { type: String, required: true },
    fecha_registro: { type: Date, required: true },
    perfil_estudiante: { type: StudentProfileSchema },
    perfil_profesor: { type: TeacherProfileSchema },
    perfil_administrador: { type: AdministratorProfileSchema },
    perfil_administrador_academico: {
      type: AcademicAdministratorProfileSchema,
    },
  },
  { collection: 'usuarios' },
)

export default model('User', UserSchema)
