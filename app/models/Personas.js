import { mongoose } from '../utils/db.server'

const PersonaScheme = mongoose.Schema(
  {
    name: String,
    age: String,
    memoji: String,
    audio: String,
    bio: String,
  },
  {
    timestamps: true,
  }
)

const Personas =
  mongoose.models.Personas || mongoose.model('Personas', PersonaScheme)

export default Personas
