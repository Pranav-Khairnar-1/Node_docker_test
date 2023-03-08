const app1 = require('./app')
const cors  = require('cors')
const  bodyParser = require('body-parser')
const express = require('express')
const app = express();
app.use(cors())
app.use(bodyParser.json())
app.listen(4001,()=>{
 console.log("post servcie running at Kanan1001")
})
