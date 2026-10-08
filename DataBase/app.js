const express = require('express');
const app = express();
const path = require('path');

const userModel = require('./usermodel.js');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render("index");
})

app.get('/read', async function(req, res){
    let users = userModel.find();
    res.render("read", {users})
})
app.post('/create', async function(req, res){
  let {name, email, image}= req.body;
 let CreatedUser =  await userModel.create({
   name,
   email,
     image
  })
 res.send(CreatedUser)
})

app.listen(3000);