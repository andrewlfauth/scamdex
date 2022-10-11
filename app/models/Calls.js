import { mongoose } from '../utils/db.server'

const CallSchema = mongoose.Schema(
  {
    name: String,
    scamNumber: String,
    scamCompany: String,
    persona: Object,
    baiterNumber: String,
    userId: String,
  },
  {
    timestamps: true,
  }
)

const Calls = mongoose.models.Calls || mongoose.model('Calls', CallSchema)

export default Calls
