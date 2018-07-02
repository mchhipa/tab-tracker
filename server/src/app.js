
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const port = process.env.PORT || 8081
let app = express()

app.use(morgan('combined'))
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'Hello World!'
  })
})
app.post('/register', (req, res) => {
  console.log(req.body)
  res.send({
    message: `Hello ${req.body.email} you are now registered`
  })
})

app.listen(port, () => {
  console.log(`starting server on port ${port}`)
})
