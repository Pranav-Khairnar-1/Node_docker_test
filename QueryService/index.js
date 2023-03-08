const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const cors = require('cors')
const app1= require('./app')
const app=express();
app.use(bodyParser.json());
app.use(cors())

 app.listen(4003,async ()=>{
     //get all events that have occured
     const resp = await axios.get('http://eventbus-service:4005/eventbus/event').catch(e=>console.log(e.message));
     if(resp){
     const events = resp.data;
     for(let e of events){
         handleEvent(e.type,e.data);
     }
    }
     console.log("4003 running")
 })