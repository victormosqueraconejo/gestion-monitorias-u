import { model, Schema } from 'mongoose'

const CareerSchema = new Schema(
  {
    escuela_id: { type: Schema.Types.ObjectId, ref: 'School', required: true },
    nombre: { type: String, required: true },
    duracion_semestres: { type: Number, required: true, min: 1 },
    estado: { type: String, required: true },
  },
  { collection: 'carreras' },
)

export default model('Career', CareerSchema)
