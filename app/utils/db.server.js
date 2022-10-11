import mongoose from 'mongoose'

let db

async function connect() {
  if (db) return db

  if (process.env.NODE_ENV === 'production') {
    db = await mongoose
      .connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
      })
      .catch((err) => console.error(err))
  } else {
    if (!global.__db) {
      global.__db = await mongoose
        .connect(process.env.DATABASE_URL, {
          useNewUrlParser: true,
        })
        .catch((err) => console.error(err))
    }
    db = global.__db
  }
  return db
}

export { mongoose, connect }
