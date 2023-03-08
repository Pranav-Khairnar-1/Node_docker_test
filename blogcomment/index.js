const express = require('express')
const cors  = require('cors')
const  bodyParser = require('body-parser')
const uuid = require('uuid')
const axios = require('axios')
const app1 =require('./app')
const app = express();
app.use(cors())
app.use(bodyParser.json())

app.listen(4002,()=>{
   console.log("comments service listening at 4002")

})
