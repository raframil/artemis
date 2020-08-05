import server from './app/app'
import {MongoHelper} from './app/infra/database/helpers/mongo-helper'
import mongodbDatasource from './config/mongodb-datasource'

const PORT = process.env.PORT || 3000

MongoHelper.connect(mongodbDatasource).then(async () => {
  server.listen(PORT, () => {
    console.log(`Pipedrive Token: ${process.env.PIPEDRIVE_API_KEY}`)
    console.log(`Bling Token: ${process.env.BLING_API_KEY}`)
    console.log(`App is running on port ${PORT}`)
  })
}).catch(console.error)


