import { model, Schema } from 'mongoose'

const TopicSchema = new Schema(
  {
    materia_id: { type: Schema.Types.ObjectId, ref: 'Subject', required: true },
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    estado: { type: String, required: true },
  },
  { collection: 'temas' },
)

export default model('Topic', TopicSchema)
