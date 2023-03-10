const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const cors = require('cors')

const app=express();
app.use(bodyParser.json());
app.use(cors())
//other services will call this service
const events=[]
app.post("/eventbus/event",(req,resp)=>{
const event =  req.body; //type,data
//creating a list of all events for query failure
events.push(event)
//echoing the event to all
axios.post("http://post-service:4001/eventbus/event/listener",event).catch(e=>console.log(e.message));
axios.post("http://comments-service:4002/eventbus/event/listener",event).catch(e=>console.log(e.message));
axios.post("http://query-service:4003/eventbus/event/listener",event).catch(e=>console.log(e.message)); //echo data to all
resp.send({});
});
//sending all the events.
app.get('/eventbus/event',(req,resp)=>{
    resp.send(events);
});