const express = require('express');
const app = express();
const userAPI = require('./apis/user.api').apis;
const security=require('./security/security');
app.get('/status', (req, res) => {
    res.send("Server is Up & Running");
})
app.use('/users',(req,res,next)=>{
    security.authorize(req,res,next);
})
app.get('/unauthorize', (req, res) => {
    res.status(401).send({
        error:"Unauthorized Request"
    })
})
app.use('/users',userAPI);

app.listen('8081',()=>{
    console.log("Server Listening at 8081...");
})