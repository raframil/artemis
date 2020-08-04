import dotenv from 'dotenv'
import express from 'express'
import orderRoutes from './app/routes/order-routes'

dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()
app.use(orderRoutes)

app.listen(PORT, () => {
  console.log(`Pipedrive Token: ${process.env.PIPEDRIVE_API_KEY}`)
  console.log(`Bling Token: ${process.env.BLING_API_KEY}`)
  console.log(`App is running on port ${PORT}`)
})
