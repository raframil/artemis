import express from 'express'

const PORT = process.env.PORT || 3000
const app = express()

app.get('/test', (request, response) => {
  response.json({ msg: 'OK' })
})

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`)
})
