import { mongoose } from '../utils/db.server'

const UserSchema = mongoose.Schema(
  {
    username: String,
    password: String,
  },
  {
    timestamps: true,
  }
)

const User = mongoose.models.User || mongoose.model('User', UserSchema)

export default User
