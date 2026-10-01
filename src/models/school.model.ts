import { model, Schema } from 'mongoose'

const SchoolSchema = new Schema(
  {
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    estado: { type: String, required: true },
  },
  { collection: 'escuelas' },
)

export default model('School', SchoolSchema)
