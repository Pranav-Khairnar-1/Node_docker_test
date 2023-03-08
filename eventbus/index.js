const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const cors = require('cors')
const app1 = require('./apps')
const app=express();
app.use(bodyParser.json());
app.use(cors())

app.listen(4005,()=>console.log("4005 started"))