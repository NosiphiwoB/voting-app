const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')
const port = 3005
const URI = process.env.DATA_BASE
const mongoose = require('mongoose')
const { saveDetails } = require('./routes/postRoutes')


app.use(express.json())
app.use(express.urlencoded({extended: "false"}))
app.use(cors())
mongoose.connect(
    URI,{
      useNewUrlParser: true, 
      useUnifiedTopology: true,
    }
  ).then(res => console.log('("i am connected to mangoDB")')).catch(err => console.log(err))
  console.log("URI",URI)
  mongoose.set('strictQuery', true)
saveDetails(app)


app.listen(port, () => console.log(`App listening on port ${port}`))