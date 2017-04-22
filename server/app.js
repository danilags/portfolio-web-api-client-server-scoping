const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const index = require('./routes/index')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

app.use('/',index)

app.listen(3000, () => {
  console.log('Server running');
})
