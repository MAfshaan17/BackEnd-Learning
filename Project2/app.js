const express = require('express');
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");

app.get('/', function(req, res){
    res.send("jas");
})

app.get('/create', async function (req, res){
    let user = await userModel.create({
        username: "lanssa",
        age:20,
        email:"lan@gmail.com"
    });
    res.send('user', userSchema);
})

app.get("/post/create", async function(req, res){
   let post = await postModel.create({
      postdata: "letsv do it",
      user:"",
   })

   let user = await userModel.findOne({_id: ""});
   user.posts.push(post._id);
   await user.save();
   res.send(post, user);
})

app.listen(3000);