import mongoose from 'mongoose'
import databaseConfig from '../config/mongodb-datasource'

export default class Database {
  constructor () {
    this.connect()
  }

  connect () {
    mongoose
      .connect(databaseConfig.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        return console.log(`Successfully connected to ${databaseConfig.mongoUrl}`)
      })
      .catch(error => {
        console.log('Error connecting to database: ', error)
        return process.exit(1)
      })
  }
}
