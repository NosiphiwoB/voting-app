const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')
const port = process.env.PORT
const URI = process.env.DATA_BASE
const mongoose = require('mongoose')
const { saveDetails } = require('./routes/postRoutes')




app.use(express.json())
app.use(cors())
mongoose.connect(
    URI,
  ).then(res => console.log('("i am connected to mangoDB")')).catch(err => console.log(err))

saveDetails(app)


app.listen(port, () => console.log(`App listening on port ${port}`))