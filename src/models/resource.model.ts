import { model, Schema } from 'mongoose'

const ResourceSchema = new Schema(
  {
    tema_id: { type: Schema.Types.ObjectId, ref: 'Topic', required: true },
    tipo: { type: String, required: true },
    titulo: { type: String, required: true },
    url: { type: String, required: true },
    agregado_por: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    validado: { type: Boolean, required: true },
    fecha_creacion: { type: Date, required: true },
  },
  { collection: 'recursos' },
)

export default model('Resource', ResourceSchema)
