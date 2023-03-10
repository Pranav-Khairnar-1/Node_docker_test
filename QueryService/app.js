const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const cors = require('cors')

const app=express();
app.use(bodyParser.json());
app.use(cors())

const posts={} // this wil contain all posts; posts will get populated based on eventbus and event fires type.
app.get('/api/v1/blog/post/query',(req,resp)=>{


    resp.send(posts);
})

const handleEvent = (type,data) => {
    //for posts
    if (type == "Post Created"){
        const {id,title} = data;
        posts[id] = {id,title,comments:[]}
        return;
    }
    //for comments
    if (type == "Comment Created"){
        const {postId,commentId,message} = data;
        const post = posts[postId]
        post.comments.push({commentId,message})
        return;
    }
}
//this is imp for queryservice as on this ; post will be populated.
app.post("/eventbus/event/listener",(req,resp)=>{
    const {type,data} = req.body
    console.log("Recived Event",type)
    handleEvent(type,data);
 
    resp.send({});
 });