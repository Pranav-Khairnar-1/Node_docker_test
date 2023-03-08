const app = require('../app')
const request= require('supertest')


 it('returns a 200 on successful query',
 async ()=>{
  return request(app)
         .post('/eventbus/event/listener')
         .send({
             type:"Post Created",
             data:"Hello World"
         }).expect(200);
  });