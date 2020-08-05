import mongoose from 'mongoose'

export const MongoHelper = {
  async connect (dataSource: any) {
    mongoose
      .connect(dataSource.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        return console.log(`Successfully connected to ${dataSource.mongoUrl}`)
      })
      .catch(error => {
        console.log('Error connecting to database: ', error)
        return process.exit(1)
      })
  }
}
